export function tempoExecucao() {
    return function (target, propertyKey, descriptor) {
        return descriptor;
    };
}
