
const Searchbox = document.getElementById("#search");
const finalResult = document.getElementById("#result");
let result = '';

$("#form").submit(function (e){

e.preventDefault()


    
    var query = $("#search").val()
    const API_KEY = '992fd49bf034fc7e795ef4f189049b7a';

    let url = `https://api.serpstack.com/search?access_key=${API_KEY}&type=web&query=${query}`;

    fetch(url).then((res)=>
    {
        return res.json();
    })
    .then((data)=>{

        $("#result").html('')

        console.log(data);

        data.organic_results.forEach(resp => {

            result = `

            <h1>${resp.title}</h1>
            <br>
            <a target="_blank" href="${resp.url}">${resp.url}</a>
            <p>${resp.snippet}</p>
    
           `
           $("#result").append(result)

        });
       

    })
})
