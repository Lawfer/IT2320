var Home = {}

Home.LoginButtonClick = function () {
    $.ajax
        ({
            url: "Home/Login",
            data: { Username: $("#loginuser").val(), Password: $("#loginpass").val()},
            success: function (result) {
                var info = JSON.parse(result);
                if (info.Username == "Invalid")
                {
                    $("#loginusererror").html("The username you entered does not exist.");
                }
                else if (info.Password == "Wrong")
                {
                    $("#loginpasserror").html("The password you entered is incorrect.");
                }
                else
                { 
                    $(".login").animate({ left: "-100%" });
                    $(".account").animate({ left: "8px" });
                }

                $.ajax
                    ({
                        url: "Home/GetAccountInformation",
                        data: { Username: $("#loginuser").val() },
                        success: function (result) {
                            var info = JSON.parse(result);
                            $(".information").html(info.Payload);
                        }
                    });
            }
        });
}

Home.CreateAccountButtonClick = function () {
    $.ajax
        ({
            url: "Home/CreateAccount",
            data: { Username: $("#registeruser").val(), Password: $("#registerpass").val(), EmailAdd: $("#registeremail").val(), EmailCon: $("#registeremailrepeat").val() },
            success: function (result) {
                var info = JSON.parse(result);
                if (info.Username == "Invalid")
                {
                    $("#registerusererror").html("Username must be at least 6 characters.");
                }
                else if (info.Username == "Exists")
                {
                    $("#registerusererror").html("The username you entered is all ready taken.");
                }
                else if (info.Password == "Invalid")
                {
                    $("#registerpasserror").html("Password must be at least 6 characters.");
                }
                else if (info.EmailAdd == "Invalid")
                {
                    $("#registeremailerror").html("The E-Mail Address you entered does not contain an @ symbol.");
                }
                else if (info.EmailCon == "Invalid")
                {
                    $("#registeremailrepeaterror").html("Please confirm your E-Mail Address.");
                }
                else if (info.EmailCon == "Mismatch")
                {
                    $("#registeremailrepeaterror").html("Your E-Mail address does not match.");
                }
                else
                {
                    $(".login").animate({ left: "-100%" });
                    $(".account").animate({ left: "8px" });
                }

                $.ajax
                    ({
                        url: "Home/GetAccountInformation",
                        data: { Username: $("#registeruser").val() },
                        success: function (result) {
                            var info = JSON.parse(result);
                            $(".information").html(info.Payload);
                        }
                    });
            }
        });
}

Home.AddElementButtonClick = function () {
    $.ajax
        ({
            url: "Home/AddOrUpdateElement",
            data: { Username: $("#loginuser").val() || $("#registeruser").val(), elementname: $("#elementname").val(), elementvalue: $("#elementvalue").val() },
            success: function (result) {
                var info = JSON.parse(result);
                if (info.Error == "Cannot Change Username") {
                    $("#elementnameerror").html(info.Error);
                }
                else if (info.Error == "Cannot Have Spaces In Element Name") {
                    $("#elementnameerror").html(info.Error);
                }
                else
                { 
                    $.ajax
                        ({
                            url: "Home/GetAccountInformation",
                            data: { Username: $("#loginuser").val() || $("#registeruser").val() },
                            success: function (result) {
                                $(".information").html(result)
                        }
                        });
                }   
            }

        });
}

$(document).ready(function () {
    $(".loginbutton").click(Home.LoginButtonClick);
    $(".registerbutton").click(Home.CreateAccountButtonClick);
    $(".elementbutton").click(Home.AddElementButtonClick);
});