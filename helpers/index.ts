export function formatCamelCaseKeys(data: Record<string, any>[]) {
    return data.map((item) =>
        Object.fromEntries(
            Object.entries(item).map(([key, value]) => [
                key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (str) => str.toUpperCase()),
                value,
            ])
        )
    );
}