
export const Get = (url: string, params: any) => {
    const urlParams = objectToQuery(params)
    console.log(urlParams)
    return fetch(`${url}${urlParams}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "app-key": "h5sqBuyer_504479847",
            "accept-version": "1.0.0",
            "app-version": "6.8.62"
        },
    })
}
export const Post = (url: string, params: any) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "app-key": "h5sqBuyer_504479847",
            "accept-version": "1.0.0",
            "app-version": "6.8.62"
        },
        body: JSON.stringify(params),
    })
}

/**
 * 将对象转换为URL查询参数（适用于GET请求）
 * @param params - 需要转换的参数对象
 * @returns 格式化后的查询参数字符串（如：?key1=val1&key2=val2）
 */
export function objectToQuery(params: Record<string, any> = {}): string {
    const queryParts: string[] = [];

    for (const [key, value] of Object.entries(params)) {
        // 过滤空值（undefined/null/空字符串）
        if (value === undefined || value === null || value === '') continue;

        // 处理数组类型（如 { a: [1,2] } 转换为 a=1&a=2）
        if (Array.isArray(value)) {
            value.forEach((item) => {
                queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`);
            });
        } else {
            // 处理基础类型（数字/布尔值转换为字符串）
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
        }
    }

    return queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
}

