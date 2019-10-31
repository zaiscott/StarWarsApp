var PlanetPromise = d3.json("https://swapi.co/api/planets");



var setBanner = function(message)

{

    d3.select(".Main").text(message);

}





















var displayNames= function(AllPlanetsData) 

{

    d3.select(".names")

    .append("h2")

    .text("All Planets")

    .on("click", function(d) {

         d3.selectAll("ul *")

        .remove()

        printAllPlanetNames(AllPlanetsData)}  )

}



var printAllPlanetNames = function(AllPlanetsData)

{

   

   

    d3.select(".names")

    .append("ul")

    .selectAll("li")

    .data(AllPlanetsData)

    .enter()

    .append("li")

    .text(function(d) { return d.name } ) 

    .on("click", function(d) { 

        printData_AllPlanets(d) } );

    

}





var printData_AllPlanets = function(singlePlanetData)

{

    d3.select(".data *").remove("ul");

    d3.select(".data").append("div").attr("class", "info");

    d3.select(".info").append("ul").attr("class", "infoList");

    d3.select(".infoList").append("li").text(singlePlanetData.name);

    d3.select(".infoList").append("li").text("Terrain:"+singlePlanetData.terrain);

    d3.select(".infoList").append("li").text("Climate:"+singlePlanetData.climate)

    d3.select(".infoList").append("li").text("Population:"+singlePlanetData.population)

    d3.select(".infoList").append("li").text("Orbital Period:"+singlePlanetData.orbital_period)

    d3.select(".infoList").append("li").text("Rotational Period:"+singlePlanetData.rotation_period)





}

































var displayHabitable= function(AllPlanetsData)

{

    d3.select(".names2")

    .append("h2")

    .text("Habitable")

    .on("click", function(d) {

        d3.selectAll("ul *")

        .remove()

        printAllPlanetNames2(AllPlanetsData)})

}

var printAllPlanetNames2= function(AllPlanetsData)

{

    console.log(AllPlanetsData)


   var Habitable= filterHabitable(AllPlanetsData)

    d3.select(".names2")

    .append("ul")

    .selectAll("li")

    .remove()

    .data(Habitable)

    .enter()

    .append("li")

    .text(function(d) { return d.name })

   .on("click",  function(d) {printHabData (d)})

       

        

       

    

        

        

        

        

}



var printHabData = function(singleHabData)

{

    d3.select(".data *").remove("ul");

    d3.select(".data").append("div").attr("class", "info");

    d3.select(".info").append("ul").attr("class", "infoList");

    d3.select(".infoList").append("li").text(singleHabData.name);

    d3.select(".infoList").append("li").text("Terrain:"+singleHabData.terrain);

    d3.select(".infoList").append("li").text("Climate:"+singleHabData.climate)

    d3.select(".infoList").append("li").text("Population:"+singleHabData.population)

    d3.select(".infoList").append("li").text("Orbital Period:"+singleHabData.orbital_period)

    d3.select(".infoList").append("li").text("Rotational Period:"+singleHabData.rotation_period)





}





var filterHabitable= function(AllPlanetsData) 

        {

       return AllPlanetsData.filter(function(planet) 

        {

            if (planet.population>0) 

                    {

                        return true;

                    }

            else{ return  false;}

         })

        

        

    }
  







var displayInhabitable= function(AllPlanetsData)

{

    d3.select(".names3")

    .append("h2")

    .text("Inhabitable")

    .on("click", function(d) {

        d3.selectAll("ul *")

        .remove()

        InhabitablePlanets(AllPlanetsData)})

}



var InhabitablePlanets = function(AllPlanetsData)

{

    

    var Inhabitable= InhabitableFilter(AllPlanetsData)

    d3.select(".names3")

    .append("ul")

    .selectAll("li")

    .data(Inhabitable)

    .enter()

    .append("li")

    .text(function(d) { return d.name })

    .on("click", function(d) { 

        printsinglePlanetData(d) });

}





var printsinglePlanetData = function(singlePlanetData)

{

    d3.select(".data *").remove("ul");

    d3.select(".data").append("div").attr("class", "info");

    d3.select(".info").append("ul").attr("class", "infoList");

    d3.select(".infoList").append("li").text(singlePlanetData.name);

    d3.select(".infoList").append("li").text("Terrain: "+singlePlanetData.terrain);

    d3.select(".infoList").append("li").text("Climate: "+singlePlanetData.climate)

    d3.select(".infoList").append("li").text("Population: "+singlePlanetData.population)

    d3.select(".infoList").append("li").text("Orbital Period: "+singlePlanetData.orbital_period)

    d3.select(".infoList").append("li").text("Rotational Period: "+singlePlanetData.rotation_period)





}





var InhabitableFilter= function(AllPlanetsData) 

        {

       return AllPlanetsData.filter(function(planetInhabitable) 

        {

            if ( planetInhabitable.population=="unknown") 

                    {

                        return true;

                    }

            else{ return  false;}

         })

        

        

    }



































PlanetPromise.then(

function(singlePlanetData)

{

    setBanner("Star Wars Planets");

    

    console.log(singlePlanetData)

    displayNames(singlePlanetData.results)

    displayHabitable(singlePlanetData.results)

    displayInhabitable(singlePlanetData.results)

   

    

   

},

function(err)

{

    setBanner("Loading Failed");

    console.log(err);

});
