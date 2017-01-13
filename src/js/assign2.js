var person_array = [];

function addperson(e) {
    e.preventDefault(); // helps to call javascript file
    //gender validation
    var gender = "";
    var radios = document.getElementsByName('gender');
    var checkeditem = false; //added for validation
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            gender = radios[i].value;
            // only one radio can be logically checked, don't check the rest
            checkeditem = true; // 
            break;
        }
    }
    if (checkeditem == false) // validates the gender
    {
        $('#lbl_gender').addClass('error');
        $('#gendererror').html('please select gender').addClass('error');
    }
    else {
        $('#lbl_gender').removeClass('error');
        $('#gendererror').html("");
    }
    var person = {
        'firstname': document.getElementById('f_name').value
        , 'lastname': document.getElementById('l_name').value
        , 'gender': gender
        , 'address': document.getElementById('address').value
        , 'state': document.getElementById('state').value
        , 'city': document.getElementById('city').value
        , 'country': document.getElementById('countries').value
        , 'contact': document.getElementById('contact').value
    };
    person_array.push(person); // stores vlaues of object person into person_array
    document.form.reset();
    console.log(person_array); // displays values entered in person_array
}

function displayperson(e1) {
    e1.preventDefault();
    var htmlcontent1 = "<table class = 'table table-striped' >" + "<tr>" + "<td>FullName</td>" + "<td>Gender</td>" + "<td>Address</td>" + "<td>contact</td>" + "</tr>";
    for (var i = 0; i < person_array.length; i++) {
        htmlcontent1 += "<tr><td>" + person_array[i].firstname + ", " + person_array[i].lastname + "</td>";
        htmlcontent1 += "<td>" + person_array[i].gender + "</td>";
        htmlcontent1 += "<td>" + person_array[i].address + ", " + person_array[i].city + ", " + person_array[i].state + ", " + person_array[i].country + "</td>";
        htmlcontent1 += "<td>" + person_array[i].contact
        htmlcontent1 += "</tr>";
    }
    htmlcontent1 += "</table>";
    document.getElementById('display').innerHTML = htmlcontent1;
}
$(document).ready(function () {
    $("#f_name").blur(function () {
        //firstname check
        var firstName = $('#f_name').val();
        if (firstName.length === 0) {
            $('#lblf_name').addClass('error');
            $('#f_nameerror').html('firstname cant be empty').addClass('error');
        }
        else {
            $('#lblf_name').removeClass('error');
            $('#f_nameerror').html("");
        }
    });
    $("#l_name").blur(function () {
        //lastname check 
        var lastName = $('#l_name').val();
        if (lastName.length === 0) {
            $('#lbll_name').addClass('error');
            $('#l_nameerror').html('Lastname cant be empty').addClass('error');
        }
        else {
            $('#lbll_name').removeClass('error');
            $('#l_nameerror').html("");
        }
    });
    $("#address1").blur(function () {
        //address1 validation
        var address1 = $('#address1').val();
        if (address1.length === 0) {
            $('#lbladdress1').addClass('error');
            $('#address1error').html("Address can't be empty").addClass('error');
        }
        else {
            $('#lbladdress1').removeClass('error');
            $('#address1error').html("");
        }
    });
    $("#state").blur(function () {
        //state validation
        var state = $('#state').val();
        if (state.length === 0) {
            $('#lblstate').addClass('error');
            $('#stateerror').html("Please select your state").addClass('error');
        }
        else {
            $('#lblstate').removeClass('error');
            $('#stateerror').html("");
        }
    });
    $("#city").blur(function () {
        //city validation
        var city = $('#city').val();
        if (city.length === 0) {
            $('#lblcity').addClass('error');
            $('#cityerror').html("Please write your city").addClass('error');
        }
        else {
            $('#lblcity').removeClass('error');
            $('#cityerror').html("");
        }
    });
    $("#countries").blur(function () {
        //country validation
        var countries = $('#countries').val();
        if (countries.length === 0) {
            $('#lblcountry').addClass('error');
            $('#countryerror').html("Please select your country").addClass('error');
        }
        else {
            $('#lblcountry').removeClass('error');
            $('#countryerror').html("");
        }
    });
    $("#contact").blur(function () {
        //contact validation
        var contact = $('#contact').val();
        if (contact.length === 0) {
            $('#lblcontact').addClass('error');
            $('#contacterror').html("Please give your contact").addClass('error');
        }
        else {
            $('#lblcontact').removeClass('error');
            $('#contacterror').html("");
        }
    });
    $('#first').hide();
    $('#second').hide();
    $("#firstbtn").on("click", function () {
        $("#first").show();
    });
    $("#secondbtn").on("click", function () {
        $("#second").show();
    });
    $('#thirdbtn').on('click', function () {
        $('#firstbtn').trigger('click');
        $('#secondbtn').trigger('click');
    });
    $('#fourthbtn').on('click', function () {
        $('#lblf_name').addClass('error');
    });
    $('#fifthbtn').on('click', function () {
        $('#lblf_name').removeClass('error');
    });
});