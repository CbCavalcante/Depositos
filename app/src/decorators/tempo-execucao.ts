export function tempoExecucao(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        return descriptor
    }
}
