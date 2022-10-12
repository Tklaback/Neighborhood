declare type SchemaLeaf = "copy" | "convert";
export interface SchemaProperty {
    required: boolean;
    schema: Schema;
    derive?: (v: any) => any;
}
interface SchemaObject {
    [property: string]: SchemaProperty;
}
declare type SchemaArray = [SchemaObject] | [SchemaLeaf];
export declare type Schema = SchemaLeaf | SchemaArray | SchemaObject;
export {};
