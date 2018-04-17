async function populateTemplate(){
    var source = await fetch('demo.hbs')
    source = await source.text()

    var template = Handlebars.compile(source)

    var dataObject = await fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
        .then(function (data) {
            return data.json()
        }).then(function (data) {
            return data.items.slice(0,3)
        })
    var result = {data: dataObject}
//put into array of objects format and change hbs template
   var html = template(result)
    $('body').append(html)
}

populateTemplate()
