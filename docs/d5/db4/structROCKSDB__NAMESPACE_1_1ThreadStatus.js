var structROCKSDB__NAMESPACE_1_1ThreadStatus =
[
    [ "CompactionPropertyType", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a3fac66ca2aec1e5d62cd933c906a6810", [
      [ "COMPACTION_JOB_ID", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a3fac66ca2aec1e5d62cd933c906a6810aecd7a83b9c04da85387f68c0d8d408f0", null ],
      [ "COMPACTION_INPUT_OUTPUT_LEVEL", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a3fac66ca2aec1e5d62cd933c906a6810a700f15edd7932a2ea531084cf984ba2c", null ],
      [ "COMPACTION_PROP_FLAGS", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a3fac66ca2aec1e5d62cd933c906a6810a3bf6354db05cf18374a7acb71b597356", null ],
      [ "COMPACTION_TOTAL_INPUT_BYTES", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a3fac66ca2aec1e5d62cd933c906a6810aeaf0e87b5c118d5a2dc9c7923ae435ba", null ],
      [ "COMPACTION_BYTES_READ", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a3fac66ca2aec1e5d62cd933c906a6810a91ad7335147424aa112ac7ce9310b793", null ],
      [ "COMPACTION_BYTES_WRITTEN", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a3fac66ca2aec1e5d62cd933c906a6810a94349e6f50a59310ca8bcdd1bca59fdc", null ],
      [ "NUM_COMPACTION_PROPERTIES", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a3fac66ca2aec1e5d62cd933c906a6810a951dabe55c85e3d1c1e311dc09b2d601", null ]
    ] ],
    [ "FlushPropertyType", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#aa9a357ea21ebf37935f2749e9c9723dd", [
      [ "FLUSH_JOB_ID", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#aa9a357ea21ebf37935f2749e9c9723dda66aec7e11432f31fb5537f36848f0ffb", null ],
      [ "FLUSH_BYTES_MEMTABLES", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#aa9a357ea21ebf37935f2749e9c9723dda682bbfb5e65d512040932e74d9e39dda", null ],
      [ "FLUSH_BYTES_WRITTEN", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#aa9a357ea21ebf37935f2749e9c9723ddae1590f86a9184c43dd71f351ccaea0ed", null ],
      [ "NUM_FLUSH_PROPERTIES", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#aa9a357ea21ebf37935f2749e9c9723dda28e4f7e45a0161da493b59dfc318aa58", null ]
    ] ],
    [ "OperationStage", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9", [
      [ "STAGE_UNKNOWN", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9afaea4a154df76c4ee7c50e91be15f856", null ],
      [ "STAGE_FLUSH_RUN", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9ac22ab275ba397b32aaea930ce54677f5", null ],
      [ "STAGE_FLUSH_WRITE_L0", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9ab4696ee0e1b784cdf622328369d6004e", null ],
      [ "STAGE_COMPACTION_PREPARE", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9ab0efd2d639557300f43499f78ac7d497", null ],
      [ "STAGE_COMPACTION_RUN", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9afe5683318ae80c809007d66ccc062c72", null ],
      [ "STAGE_COMPACTION_PROCESS_KV", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9adad16c9aa9b24a86ac4435c7e7088cbf", null ],
      [ "STAGE_COMPACTION_INSTALL", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9a668c92b99119ce5cdf00dcfba2b75ada", null ],
      [ "STAGE_COMPACTION_SYNC_FILE", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9a74ac0e7d647faa2e7aaa56d31c9bd5a4", null ],
      [ "STAGE_PICK_MEMTABLES_TO_FLUSH", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9ad093ae2c8b12b65459164768bb465b6a", null ],
      [ "STAGE_MEMTABLE_ROLLBACK", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9a5294fa2abe0ed6de9b1c751406b20ee5", null ],
      [ "STAGE_MEMTABLE_INSTALL_FLUSH_RESULTS", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9a986528c872a06be7cb4efefdee3e5f59", null ],
      [ "NUM_OP_STAGES", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae412a07837a7b69ab0139a29322131a9ac50a8d10ebffc8d70e5301460bb33a09", null ]
    ] ],
    [ "OperationType", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86", [
      [ "OP_UNKNOWN", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86a14009efcae3b1fdf803372b51e1b9613", null ],
      [ "OP_COMPACTION", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86aa65fe163ab62bb0e640ec9eec60aabf8", null ],
      [ "OP_FLUSH", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86a5eb7c155b575ddda6139f3b16bfc48b9", null ],
      [ "OP_DBOPEN", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86adebf9732bd07a2d00f9e63f6eeb0925d", null ],
      [ "OP_GET", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86a0042050f3d7950d2b925d5c63e477e5d", null ],
      [ "OP_MULTIGET", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86ade6cd5a1417497dbad7f9bdf942888f0", null ],
      [ "OP_DBITERATOR", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86a43ebac4b9519c04e5afec8486e5d5c4a", null ],
      [ "OP_VERIFY_DB_CHECKSUM", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86a76a62595315c1bcf5dfb93c3b2d846bb", null ],
      [ "OP_VERIFY_FILE_CHECKSUMS", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86a11c38b2b3a343690db5080953322903c", null ],
      [ "OP_GETENTITY", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86a1c7edb8329f11868a53dbbb30fdb4b43", null ],
      [ "OP_MULTIGETENTITY", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86af8efaaf30e06e86ef742c67d5ae74c90", null ],
      [ "OP_READ_MANIFEST", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86acfa0519d7244d65ea8f320881b1d2012", null ],
      [ "NUM_OP_TYPES", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a857db969b822aa1676eef05e9bbbba86a8f41e082e5e3afbce448cac2fee9b95b", null ]
    ] ],
    [ "StateType", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ad3b646b0416f76da5bf83879d7051fff", [
      [ "STATE_UNKNOWN", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ad3b646b0416f76da5bf83879d7051fffa4b613ccaf7c88d362402578c387c2fb3", null ],
      [ "STATE_MUTEX_WAIT", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ad3b646b0416f76da5bf83879d7051fffa070ba9e8f5527787d6deb60ff5749c7b", null ],
      [ "NUM_STATE_TYPES", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ad3b646b0416f76da5bf83879d7051fffab5a8bb529ef2dbd2170dd73bdcecb224", null ]
    ] ],
    [ "ThreadType", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ade64325c63e55f258236b06b8e400f3f", [
      [ "HIGH_PRIORITY", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ade64325c63e55f258236b06b8e400f3fa203058601c0997c5d4a07419c14367d1", null ],
      [ "LOW_PRIORITY", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ade64325c63e55f258236b06b8e400f3fa19f048ca3bd978a950d9489c7e83cf78", null ],
      [ "USER", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ade64325c63e55f258236b06b8e400f3fa2fe49d0791c90725c43edf8e49c6f99c", null ],
      [ "BOTTOM_PRIORITY", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ade64325c63e55f258236b06b8e400f3fa71ed15884c377c3fe41b4594aede7f92", null ],
      [ "NUM_THREAD_TYPES", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ade64325c63e55f258236b06b8e400f3fac1bdcfe8d005b7f0652fe1d07ae8cc09", null ]
    ] ],
    [ "ThreadStatus", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a00340289f5133b94b94ac1d99f3ca9fb", null ],
    [ "GetOperationName", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#af98a9eaf635a88b7ce80670d4fb515d2", null ],
    [ "GetOperationPropertyName", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ac591dc8a0010fa9ea9c7164a6802116b", null ],
    [ "GetOperationStageName", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#aae3151393c80c677a3b4d15b9947d6e8", null ],
    [ "GetStateName", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a6b14475e51e65ca945701d1adb8616c4", null ],
    [ "GetThreadTypeName", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a86e14663c96dfb476cd4051a56f34beb", null ],
    [ "InterpretOperationProperties", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a80e75b885be1cfba769d921fa97d4322", null ],
    [ "MicrosToString", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#aa6ec91d8eb6d6eb5028d56be8746f4c7", null ],
    [ "cf_name", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#aa7ccfa0135ccb613481dd1f11b2832a5", null ],
    [ "db_name", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#aa39bc8d8e1737f449a0b668588231c88", null ],
    [ "kNumOperationProperties", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a4e66d17c3bcca49f6debc5e67e661327", null ],
    [ "op_elapsed_micros", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ad5906ed2606a09f18580803b52a81be8", null ],
    [ "op_properties", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a7f9ab4544dd241bce6cdc88bbc6b822d", null ],
    [ "operation_stage", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a5421f83d53bde714178eca668435c105", null ],
    [ "operation_type", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a3991d7eb46be497e6f0b72197f2acd71", null ],
    [ "state_type", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ab8a8085f63d5b0f17e93fb9773687a7d", null ],
    [ "thread_id", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#ae4bb28b636c66f51430f9c320aed8d1a", null ],
    [ "thread_type", "d5/db4/structROCKSDB__NAMESPACE_1_1ThreadStatus.html#a2e91567a338cc263068e9dc701416d74", null ]
];