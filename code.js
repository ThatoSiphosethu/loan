$(document).ready(function ()
    {

        $("button").click(loanCalculator);

            var myRules = {
                amount: {
                    required: true
                },

                apr: {
                    required: true,
                    digits: true,
                    min: 2,
                    max:6
                },

                score: {
                    required: true,
                    digits: true,
                    min: 300,
                    max: 850
                },

                salary: {
                    required: true,
                    digits: true,
                    min: 2000,
                    max: 40000
                },

                history: {
                    required: true,
                    digits: true,
                    min: 1,
                    max: 12
                }
            };

            var myMessages = {
                amount: {
                    required : "Amount requested"
                },

                apr: {
                    required : "Annual Interest rate"
                },

                score: {
                    required : "Your credit score"
                },

                salary: {
                    required : "Your annual salary"
                },

                history: {
                    required : "Months on the job"
                }
            }

            function loanCalculator() {

                var amount = $("#amount").val();
                amount = parseFloat(amount);

                var apr = $("#apr").val();
                apr = parseFloat(apr);

                var score = $("#score").val();
                score = parseFloat(score);

                var history = $("#history").val();
                history = parseFloat(history);

                var loan = (amount * (apr / 100) / 12).toFixed(2);


                if ( score > 300)
                {
                    loan = "Your loan application is denied"
                }

                else if (score > 800)
                {
                    loan = "Your loan is approved"
                }

            }


            $("form").validate({
                submitHandler: loanCalculator,
                rules: myRules,
                messages: myMessages
            })
    });