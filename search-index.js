var searchIndex = JSON.parse('{\
"exacl":{"doc":"exacl","t":[18,18,3,3,4,3,18,18,18,18,18,18,18,13,18,3,13,18,18,13,18,18,18,13,18,3,18,18,18,18,18,18,18,13,13,18,18,18,18,18,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,5,11,11,11,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,5,11,11,11,11,11,11,11,11,11,11,11,5,11,11,11,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["ACCESS_ACL","APPEND","Acl","AclEntry","AclEntryKind","AclOption","CHOWN","DEFAULT","DEFAULT_ACL","DELETE","DELETE_CHILD","DIRECTORY_INHERIT","EXECUTE","Everyone","FILE_INHERIT","Flag","Group","INHERITED","LIMIT_INHERIT","Mask","NFS4_SPECIFIC","NFS4_SPECIFIC","ONLY_INHERIT","Other","POSIX_SPECIFIC","Perm","READ","READATTR","READEXTATTR","READSECURITY","READ_DATA","SYMLINK_ACL","SYNC","Unknown","User","WRITE","WRITEATTR","WRITEEXTATTR","WRITESECURITY","WRITE_DATA","all","all","all","allow","allow_group","allow_mask","allow_other","allow_user","bitand","bitand","bitand","bitand_assign","bitand_assign","bitand_assign","bitor","bitor","bitor","bitor_assign","bitor_assign","bitor_assign","bits","bits","bits","bitxor","bitxor","bitxor","bitxor_assign","bitxor_assign","bitxor_assign","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","cmp","cmp","cmp","cmp","cmp","contains","contains","contains","default","default","default","deny_group","deny_user","deserialize","deserialize","deserialize","deserialize","drop","empty","empty","empty","entries","eq","eq","eq","eq","eq","extend","extend","extend","flags","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from_bits","from_bits","from_bits","from_bits_truncate","from_bits_truncate","from_bits_truncate","from_bits_unchecked","from_bits_unchecked","from_bits_unchecked","from_entries","from_iter","from_iter","from_iter","from_reader","from_str","from_str","from_str","from_str","from_str","from_unified_entries","getfacl","hash","hash","hash","insert","insert","insert","intersects","intersects","intersects","into","into","into","into","into","into","is_all","is_all","is_all","is_empty","is_empty","is_empty","is_empty","is_nfs4","is_posix","kind","name","ne","ne","ne","ne","not","not","not","partial_cmp","partial_cmp","partial_cmp","partial_cmp","partial_cmp","perms","read","remove","remove","remove","serialize","serialize","serialize","serialize","set","set","set","setfacl","sub","sub","sub","sub_assign","sub_assign","sub_assign","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","to_string","to_string","to_string","to_string","to_string","to_writer","toggle","toggle","toggle","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","write"],"q":["exacl","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Get/set the access ACL only (Linux and FreeBSD only).","APPEND_DATA permission for a file. Same as …","Access Control List native object wrapper.","ACL entry with allow/deny semantics.","Kind of ACL entry (User, Group, Mask, Other, or Unknown).","Controls how ACL’s are accessed.","CHANGE_OWNER permission for a file or directory.","Specifies a default ACL entry on Linux.","Get/set the default ACL only (Linux and FreeBSD only).","DELETE permission for a file.","DELETE_CHILD permission for a directory.","Inherit to directories.","EXECUTE permission for a file. Same as SEARCH permission …","Entry represents a NFS “everyone” entry.","Inherit to files.","Represents ACL entry inheritance flags.","Entry represents a group.","ACL entry was inherited.","Clear the DIRECTORY_INHERIT flag in the ACL entry that is …","Entry represents a Posix.1e “mask” entry.","NFSv4 Specific Flags on FreeBSD.","All NFSv4 specific permissions.","Don’t consider this entry when processing the ACL. Just …","Entry represents a Posix.1e “other” entry.","Posix specific permissions.","Represents file access permissions.","READ_DATA permission for a file. Same as LIST_DIRECTORY …","READ_ATTRIBUTES permission for file or directory.","READ_EXTATTRIBUTES permission for a file or directory.","READ_SECURITY permission for a file or directory.","NFSv4 READ_DATA permission.","Get/set the ACL of the symlink itself (macOS only).","SYNCHRONIZE permission (unsupported).","Entry represents a possibly corrupt ACL entry, caused by …","Entry represents a user.","WRITE_DATA permission for a file. Same as ADD_FILE …","WRITE_ATTRIBUTES permission for a file or directory.","WRITE_EXTATTRIBUTES permission for a file or directory.","WRITE_SECURITY permission for a file or directory.","NFSv4 WRITE_DATA permission.","Returns the set containing all flags.","Returns the set containing all flags.","Returns the set containing all flags.","True if entry is allowed; false means deny. Linux only …","Construct an ALLOW access control entry for a group.","Construct an ALLOW access control entry for mask.","Construct an ALLOW access control entry for other.","Construct an ALLOW access control entry for a user.","Returns the intersection between the two sets of flags.","Returns the intersection between the two sets of flags.","Returns the intersection between the two sets of flags.","Disables all flags disabled in the set.","Disables all flags disabled in the set.","Disables all flags disabled in the set.","Returns the union of the two sets of flags.","Returns the union of the two sets of flags.","Returns the union of the two sets of flags.","Adds the set of flags.","Adds the set of flags.","Adds the set of flags.","Returns the raw value of the flags currently stored.","Returns the raw value of the flags currently stored.","Returns the raw value of the flags currently stored.","Returns the left flags, but with all the right flags …","Returns the left flags, but with all the right flags …","Returns the left flags, but with all the right flags …","Toggles the set of flags.","Toggles the set of flags.","Toggles the set of flags.","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns <code>true</code> all of the flags in <code>other</code> are contained …","Returns <code>true</code> all of the flags in <code>other</code> are contained …","Returns <code>true</code> all of the flags in <code>other</code> are contained …","","","","Construct a DENY access control entry for a group.","Construct a DENY access control entry for a user.","","","","","","Returns an empty set of flags","Returns an empty set of flags","Returns an empty set of flags","Return ACL as a vector of [<code>AclEntry</code>].","","","","","","","","","Flags indicating whether an entry is inherited, etc.","","","","","","","","","Format an <code>AclEntry</code> 5-tuple: ::::","","","","","","","","","","","","","","","","","","","Convert from underlying bit representation, unless that …","Convert from underlying bit representation, unless that …","Convert from underlying bit representation, unless that …","Convert from underlying bit representation, dropping any …","Convert from underlying bit representation, dropping any …","Convert from underlying bit representation, dropping any …","Convert from underlying bit representation, preserving all…","Convert from underlying bit representation, preserving all…","Convert from underlying bit representation, preserving all…","Return an ACL from a slice of [<code>AclEntry</code>].","","","","Read ACL entries from text.","Read ACL entries from text.","","","","","Return pair of ACL’s from slice of [<code>AclEntry</code>]. This …","Get access control list (ACL) for a file or directory.","","","","Inserts the specified flags in-place.","Inserts the specified flags in-place.","Inserts the specified flags in-place.","Returns <code>true</code> if there are flags common to both <code>self</code> and …","Returns <code>true</code> if there are flags common to both <code>self</code> and …","Returns <code>true</code> if there are flags common to both <code>self</code> and …","","","","","","","Returns <code>true</code> if all flags are currently set.","Returns <code>true</code> if all flags are currently set.","Returns <code>true</code> if all flags are currently set.","Return true if ACL is empty.","Returns <code>true</code> if no flags are currently stored.","Returns <code>true</code> if no flags are currently stored.","Returns <code>true</code> if no flags are currently stored.","Return true if file uses an NFSv4 ACL (<code>FreeBSD</code> only).","Return true if ACL is a Posix.1e ACL on Linux or <code>FreeBSD</code>.","Kind of entry (User, Group, Other, Mask, Everyone, or …","Name of the principal being given access. You can use a …","","","","","Returns the complement of this set of flags.","Returns the complement of this set of flags.","Returns the complement of this set of flags.","","","","","","Permission bits for the entry.","Read ACL for the specified file.","Removes the specified flags in-place.","Removes the specified flags in-place.","Removes the specified flags in-place.","","","","","Inserts or removes the specified flags depending on the …","Inserts or removes the specified flags depending on the …","Inserts or removes the specified flags depending on the …","Set access control list (ACL) for specified files and …","Returns the set difference of the two sets of flags.","Returns the set difference of the two sets of flags.","Returns the set difference of the two sets of flags.","Disables all flags enabled in the set.","Disables all flags enabled in the set.","Disables all flags enabled in the set.","","","","","","Write ACL entries to text.","Return ACL as a string.","","","","","Write ACL entries to text.","Toggles the specified flags in-place.","Toggles the specified flags in-place.","Toggles the specified flags in-place.","","","","","","","","","","","","","","","","","","","Write ACL for the specified file."],"i":[1,2,0,0,0,0,2,3,1,2,2,3,2,4,3,0,4,3,3,4,3,2,3,4,2,0,2,2,2,2,2,1,2,4,4,2,2,2,2,2,1,3,2,5,5,5,5,5,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,6,1,4,5,3,2,6,1,4,5,3,2,1,4,5,3,2,1,4,5,3,2,1,4,5,3,2,1,3,2,1,3,2,5,5,4,5,3,2,6,1,3,2,6,1,4,5,3,2,1,3,2,5,1,1,1,1,1,4,4,5,5,3,3,3,3,3,3,2,2,2,2,2,2,6,1,4,5,3,2,1,3,2,1,3,2,1,3,2,6,1,3,2,0,0,4,5,3,2,6,0,1,3,2,1,3,2,1,3,2,6,1,4,5,3,2,1,3,2,6,1,3,2,6,6,5,5,1,5,3,2,1,3,2,1,4,5,3,2,5,6,1,3,2,4,5,3,2,1,3,2,0,1,3,2,1,3,2,1,4,5,3,2,0,6,4,5,3,2,0,1,3,2,6,1,4,5,3,2,6,1,4,5,3,2,6,1,4,5,3,2,6],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[],["acloption",3]],[[],["flag",3]],[[],["perm",3]],null,[[["perm",3],["str",15]],["aclentry",3]],[[["perm",3]],["aclentry",3]],[[["perm",3]],["aclentry",3]],[[["perm",3],["str",15]],["aclentry",3]],[[["acloption",3]],["acloption",3]],[[["flag",3]],["flag",3]],[[["perm",3]],["perm",3]],[[["acloption",3]]],[[["flag",3]]],[[["perm",3]]],[[["acloption",3]],["acloption",3]],[[["flag",3]],["flag",3]],[[["perm",3]],["perm",3]],[[["acloption",3]]],[[["flag",3]]],[[["perm",3]]],[[],["u32",15]],[[],["u32",15]],[[],["c_uint",6]],[[["acloption",3]],["acloption",3]],[[["flag",3]],["flag",3]],[[["perm",3]],["perm",3]],[[["acloption",3]]],[[["flag",3]]],[[["perm",3]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["acloption",3]],[[],["aclentrykind",4]],[[],["aclentry",3]],[[],["flag",3]],[[],["perm",3]],[[]],[[]],[[]],[[]],[[]],[[["acloption",3]],["ordering",4]],[[["aclentrykind",4]],["ordering",4]],[[],["ordering",4]],[[["flag",3]],["ordering",4]],[[["perm",3]],["ordering",4]],[[["acloption",3]],["bool",15]],[[["flag",3]],["bool",15]],[[["perm",3]],["bool",15]],[[],["acloption",3]],[[],["flag",3]],[[],["perm",3]],[[["perm",3],["str",15]],["aclentry",3]],[[["perm",3],["str",15]],["aclentry",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[]],[[],["acloption",3]],[[],["flag",3]],[[],["perm",3]],[[],[["vec",3],["result",6]]],[[["acloption",3]],["bool",15]],[[["aclentrykind",4]],["bool",15]],[[["aclentry",3]],["bool",15]],[[["flag",3]],["bool",15]],[[["perm",3]],["bool",15]],[[["intoiterator",8]]],[[["intoiterator",8]]],[[["intoiterator",8]]],null,[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[["u32",15]],[["option",4],["acloption",3]]],[[["u32",15]],[["flag",3],["option",4]]],[[["c_uint",6]],[["option",4],["perm",3]]],[[["u32",15]],["acloption",3]],[[["u32",15]],["flag",3]],[[["c_uint",6]],["perm",3]],[[["u32",15]],["acloption",3]],[[["u32",15]],["flag",3]],[[["c_uint",6]],["perm",3]],[[],[["result",6],["acl",3]]],[[["intoiterator",8]],["acloption",3]],[[["intoiterator",8]],["flag",3]],[[["intoiterator",8]],["perm",3]],[[["read",8]],[["vec",3],["result",6]]],[[["str",15]],[["vec",3],["result",6]]],[[["str",15]],["result",4]],[[["str",15]],["result",4]],[[["str",15]],["result",4]],[[["str",15]],["result",4]],[[],["result",6]],[[],[["vec",3],["result",6]]],[[]],[[]],[[]],[[["acloption",3]]],[[["flag",3]]],[[["perm",3]]],[[["acloption",3]],["bool",15]],[[["flag",3]],["bool",15]],[[["perm",3]],["bool",15]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[["path",3],["acloption",3]],[["bool",15],["result",6]]],[[],["bool",15]],null,null,[[["acloption",3]],["bool",15]],[[["aclentry",3]],["bool",15]],[[["flag",3]],["bool",15]],[[["perm",3]],["bool",15]],[[],["acloption",3]],[[],["flag",3]],[[],["perm",3]],[[["acloption",3]],[["ordering",4],["option",4]]],[[["aclentrykind",4]],[["ordering",4],["option",4]]],[[],[["option",4],["ordering",4]]],[[["flag",3]],[["ordering",4],["option",4]]],[[["perm",3]],[["ordering",4],["option",4]]],null,[[["path",3],["acloption",3]],[["result",6],["acl",3]]],[[["acloption",3]]],[[["flag",3]]],[[["perm",3]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["bool",15],["acloption",3]]],[[["flag",3],["bool",15]]],[[["perm",3],["bool",15]]],[[],["result",6]],[[["acloption",3]],["acloption",3]],[[["flag",3]],["flag",3]],[[["perm",3]],["perm",3]],[[["acloption",3]]],[[["flag",3]]],[[["perm",3]]],[[]],[[]],[[]],[[]],[[]],[[],[["string",3],["result",6]]],[[],[["string",3],["result",6]]],[[],["string",3]],[[],["string",3]],[[],["string",3]],[[],["string",3]],[[["write",8]],["result",6]],[[["acloption",3]]],[[["flag",3]]],[[["perm",3]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[["path",3],["acloption",3]],["result",6]]],"p":[[3,"AclOption"],[3,"Perm"],[3,"Flag"],[4,"AclEntryKind"],[3,"AclEntry"],[3,"Acl"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};