function getSearchParams(search: string = location.search) {
    const params = search.substring(1);

    const replaced = params
        .replace(/&/g, '","')
        .replace(/=/g, '":"');

    return JSON.parse(
        '{"' + replaced + '"}',
        function (key, value) {
            return key === "" ? value : decodeURIComponent(value);
        }
    );
}

export default getSearchParams;