let input = document.getElementById("inp");

input.addEventListener("keyup", function () {
    let params = {
        action: 'opensearch',
        origin: '*',
        format: 'json',
        search: ''
    };

    if (this.value) {
        params.search = this.value;

        let body = Object.keys(params)
            .map(function (prop) {
                return prop + '=' + params[prop];
            })
            .join('&');

        let http = new XMLHttpRequest();
        http.open('POST', 'https://en.wikipedia.org/w/api.php');

        function handleResponse() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    // success callback
                    let data = JSON.parse(this.responseText);
                    let datalist = document.getElementById("search");
                    datalist.innerHTML = createOptions(data[1], data[3]);

                    //    queryselector
                    //
                    // let inp = document.querySelectorAll("datalist");
                    //     inp[0].addEventListener("click", function () {
                    //         console.log('ok');
                    //     })

                    // console.log(inp[0].children[0].href);
                }
            }
        }

        http.addEventListener('readystatechange', handleResponse);
        http.send(body);

    }
});

function createOptions(options, links) {
    let list = '';

    for (let i = 0; i < options.length; i++) {
        list += '<a target="_blank" href="' + links[i] + '">' + options[i] + '</a>';
    }

    return list;
}