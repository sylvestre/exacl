#!/bin/bash

# Test suite that tests exacl tool with malformed input.

set -u -o pipefail

EXACL='../target/debug/exacl'

# Add memcheck command if defined.
if [ -n "${MEMCHECK+x}" ]; then
    echo "# MEMCHECK=$MEMCHECK"
    EXACL="$MEMCHECK $EXACL"
fi

# Retrieve name of OS: "Darwin" or "Linux"
CURRENT_OS=`uname -s`

# Put quotes back on JSON text.
quotifyJson() { 
    echo "$1" | sed -E -e 's/([A-Za-z0-9_-]+)/"\1"/g' -e 's/:"false"/:false/g' -e 's/:"true"/:true/g'
}

testInvalidType() {
    input="{}"
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        "JSON parser error: invalid type: map, expected a sequence at line 1 column 1" \
        "$msg"

    input="["
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        "JSON parser error: EOF while parsing a list at line 2 column 0" \
        "$msg"
}

testInvalidUser() {
    input=`quotifyJson "[{kind:user,name:non_existant_user,perms:[execute],flags:[],allow:true}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        "Invalid ACL: entry 0: unknown user name: \"non_existant_user\"" \
        "$msg"

    input=`quotifyJson "[{kind:user,name:4294967296,perms:[execute],flags:[],allow:true}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        "Invalid ACL: entry 0: unknown user name: \"4294967296\"" \
        "$msg"
}

testInvalidGroup() {
    input=`quotifyJson "[{kind:group,name:non_existant_group,perms:[execute],flags:[],allow:true}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        "Invalid ACL: entry 0: unknown group name: \"non_existant_group\"" \
        "$msg"

    input=`quotifyJson "[{kind:group,name:4294967296,perms:[execute],flags:[],allow:true}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        "Invalid ACL: entry 0: unknown group name: \"4294967296\"" \
        "$msg"
}

testInvalidGUID() {
    input=`quotifyJson "[{kind:group,name:00000000-0000-0000-000-000000000000,perms:[execute],flags:[],allow:true}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        "Invalid ACL: entry 0: unknown group name: \"00000000-0000-0000-000-000000000000\"" \
        "$msg"
}

testUnknownKind() {
    input=`quotifyJson "[{kind:unknown,name:501,perms:[execute],flags:[],allow:true}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        'Invalid ACL: entry 0: unsupported kind: "unknown"' \
        "$msg"
}

testMissingFlags() {
    input=`quotifyJson "[{kind:user,name:501,perms:[execute],allow:true}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        'JSON parser error: missing field `flags` at line 1 column 62' \
        "$msg"
}

testInvalidFlag() {
    input=`quotifyJson "[{kind:user,name:501,perms:[execute],flags:[whatever],allow:true}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1 | sed -E -e 's/\`//g'`
    assertEquals 1 $?

    if [ "$CURRENT_OS" = "Darwin" ]; then
        expected='expected one of defer_inherit, no_inherit, inherited, file_inherit, directory_inherit, limit_inherit, only_inherit'
    else
        expected='expected default'
    fi

    assertEquals \
        "JSON parser error: unknown variant whatever, $expected at line 1 column 68" \
        "$msg"
}

testExtraAttribute() {
    input=`quotifyJson "[{kind:user,name:501,perms:[execute],flags:[],allow:true,ignore:0}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        'JSON parser error: unknown field `ignore`, expected one of `kind`, `name`, `perms`, `flags`, `allow` at line 1 column 82' \
        "$msg"
}

testDuplicateAttribute() {
    input=`quotifyJson "[{kind:user,name:501,perms:[execute],flags:[],allow:true,allow:false}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        'JSON parser error: duplicate field `allow` at line 1 column 81' \
        "$msg"
}

testMisspelledAttribute() {
    input=`quotifyJson "[{kin:user,name:501,perms:[execute],flags:[],allow:true}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        'JSON parser error: unknown field `kin`, expected one of `kind`, `name`, `perms`, `flags`, `allow` at line 1 column 8' \
        "$msg"
}

testPermsInvalidType() {
    input=`quotifyJson "[{kind:user,name:501,perms:0,flags:[],allow:true}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        'JSON parser error: invalid type: string "0", expected list of permissions at line 1 column 40' \
        "$msg"
}

testFlagsInvalidType() {
    input=`quotifyJson "[{kind:user,name:501,perms:[read],flags:0,allow:true}]"`
    msg=`echo "$input" | $EXACL --set non_existant 2>&1`
    assertEquals 1 $?
    assertEquals \
        'JSON parser error: invalid type: string "0", expected list of flags at line 1 column 57' \
        "$msg"
}

. shunit2
