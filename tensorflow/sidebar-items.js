initSidebarItems({"enum":[["AttrType","Describes the type of the value of an attribute on an operation."],["Code","Error values that can be returned."],["DataType","Type of a single tensor element."]],"fn":[["version","Returns a string describing version information of the `TensorFlow` library. `TensorFlow` is using semantic versioning."]],"mod":[["expr","This module builds computation graphs."]],"struct":[["AttrMetadata","AttrMetadata describes the value of an attribute on an operation."],["BFloat16","BFloat16 provides a Rust type for BFloat16."],["Device","Metadata about a device."],["Function","Function is a grouping of operations with defined inputs and outputs. Once created and added to graphs, functions can be invoked by creating an operation whose operation type matches the function name."],["FunctionOptions","Options that can be passed during function creation."],["Graph","Represents a computation graph.  Graphs may be shared between sessions. Graphs are thread-safe when used as directed."],["ImportGraphDefOptions","`ImportGraphDefOptions` holds options that can be passed to `Graph::import_graph_def`."],["Input","A `Input` is one end of a graph edge. It holds an operation and an index into the inputs of that operation."],["Library","Dynamically loaded plugins. The C API doesn't provide a way to unload libraries, so nothing happens when this goes out of scope."],["Operation","An `Operation` is a node in a `Graph`. It is a computation which accepts inputs and produces outputs."],["OperationDescription","An `OperationDescription` is an `Operation` in the process of being built (i.e. the builder pattern)."],["OperationIter","Iterator over the operations in a `Graph`."],["Output","A `Output` is one end of a graph edge. It holds an operation and an index into the outputs of that operation."],["OutputToken","An opaque token for retrieving an output from a computation."],["QInt16","Quantized type for i16."],["QInt32","Quantized type for i32."],["QInt8","Quantized type for i8."],["QUInt16","Quantized type for u16."],["QUInt8","Quantized type for u8."],["SavedModelBundle","Aggregation type for a saved model bundle."],["Session","Manages a single graph and execution."],["SessionOptions","Options that can be passed during session creation."],["Shape","A Shape is the shape of a tensor.  A Shape may be an unknown rank, or it may have a known rank with each dimension being known or unknown."],["Status","Holds error information when communicating with back and forth with `tensorflow`."],["StepWithGraph","Manages the inputs and outputs for a single execution of a graph."],["Tensor","Holds a multi-dimensional array of elements of a single data type."],["TensorDataCRepr","Inner representation for `Tensor`s of types where C and Rust have the same representation."],["TensorDataNoCRepr","Inner representation for `Tensor`s of types where C and Rust have different representations."]],"trait":[["TensorInner","Inner representation of `Tensor`s."],["TensorType","A Rust type that maps to a `DataType`."]],"type":[["Result","Convenience type for `Result` with `Status` as the error type."]]});