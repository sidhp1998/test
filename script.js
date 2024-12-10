document.addEventListener("DOMContentLoaded", function() {
    const temp_button = document.getElementById("btn-temperature");
    temp_button.addEventListener("click", convert_temperature);

    const weight_button = document.getElementById("btn-weight");
    weight_button.addEventListener("click", convert_weight);

    const dist_button = document.getElementById("btn-distance");
    dist_button.addEventListener("click", convert_distance);

    const fuel_con = document.getElementById("btn-fuel-consumption");
    fuel_con.addEventListener("click", convert_fuel_con);
});


function convert_temperature()
{
    var temp_c_selector = document.getElementById("temperature-c-selector");
    var temp_f_selector = document.getElementById("temperature-f-selector");
    var celcius = document.getElementById("temperature-c");
    var farenheit = document.getElementById("temperature-f");
    if(temp_c_selector.checked==true)
    {        
        farenheit.value = (Number(celcius.value)*(9/5)+32).toString();
    }
    if(temp_f_selector.checked==true)
    {
        celcius.value = ((Number(farenheit.value)-32)*(5/9)).toString();
    }
}

function convert_weight()
{
    var weight_kg_selector = document.getElementById("weight-kg-selector");
    var weight_lb_selector = document.getElementById("weight-lb-selector");
    var kg = document.getElementById("weight-kg");
    var lb = document.getElementById("weight-lb");
    if(weight_kg_selector.checked==true)
    {
        lb.value = (Number(kg.value)*2.205).toString();
    }
    if(weight_lb_selector.checked==true)
    {   
        kg.value = (Number(lb.value)/2.205).toString();
    }
}
function convert_distance()
{
    var distance_km_selector = document.getElementById("distance-km-selector");
    var distance_m_selector = document.getElementById("distance-m-selector");
    var km = document.getElementById("distance-km");
    var m = document.getElementById("distance-m");
    if(distance_km_selector.checked==true)
    {
        m.value = (Number(km.value)/1.609).toString();
    }
    if(distance_m_selector.checked==true)
    {   
        km.value = (Number(m.value)*1.609).toString();
    }
}

function convert_fuel_con()
{
    var fuel_consumption_kmpl_selector = document.getElementById("fuel-consumption-kmpl-selector");
    var fuel_consumption_mpg_selector = document.getElementById("fuel-consumption-mpg-selector");
    var kmpl = document.getElementById("fuel-consumption-kmpl");
    var mpg = document.getElementById("fuel-consumption-mpg");
    if(fuel_consumption_kmpl_selector.checked==true)
    {
        mpg.value = (Number(kmpl.value)*2.352).toString();
    }
    if(fuel_consumption_mpg_selector.checked==true)
    {   
        kmpl.value = (Number(mpg.value)/2.352).toString();
    }
}