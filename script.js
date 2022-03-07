//XML hppt request are used to intract with servars via api
//4 steps

//step 01: creat a xhr object(XMLHTTPREQUEST) NEW
//whole pgm should have same name'
var request= new XMLHttpRequest();
//step2:open a connection
//first parameter:'api URL',
//second paramter:'api URL',
//optional 3rd paramter:ture
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
//step 3: sending a connection path
