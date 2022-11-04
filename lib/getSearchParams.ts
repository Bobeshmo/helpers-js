function getSearchParams(search: string = location.search) {
    const params = search.substring(1);

    return JSON.parse(
        '{"' + params.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        function (key, value) {
            return key === "" ? value : decodeURIComponent(value);
        }
    );
}

export default getSearchParams;