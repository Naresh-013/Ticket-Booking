document.addEventListener("DOMContentLoaded", function () {
    const ticketForm = document.getElementById("ticketForm");

    ticketForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Get user input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const numPersons = document.getElementById("numPersons").value;

        // Check if the number of persons is within the limit (1 to 5)
        if (numPersons >= 1 && numPersons <= 5) {
            // Create a new window for displaying ticket details
            const ticketWindow = window.open("", "_blank");
            ticketWindow.document.open();
            ticketWindow.document.write(`
                <html>
                <head>
                    <title>Ticket Details</title>
                    <style>
                        body {
                            text-align: center;
                            background-color:black;
                           
                        }
                        .ticket {
                            background-image:url(light);
                            color:goldenrod; 
                            width: 30%;
                            margin: 0 auto;
                            border: 1px solid #ccc;
                            padding: 20px;
                            background-position: center;
 				            background-repeat: no-repeat;
 				            background-size: cover;
                        }
                    </style>
                </head>
                <body>
                    <div class="ticket">
                        <h2>Ticket Details</h2>
                        <p>Name: ${name}</p>
                        <p>Email: ${email}</p>
                        <p>Number of Persons: ${numPersons}</p>
                        
                        <!-- Extra details -->
                        <h3>Event Details</h3>
                        <p>Concert Date: 12/12/2023</p>
                        <p>Time: 6:30 PM</p><br/>
                        <p>Important Note!!!!</p>
                        <p>'WE SERVE FIRST COME BASIS'</p>
                        <p>Enjoy your Evening!!</p>
                    </div>
                </body>
                </html>
            `);
            ticketWindow.document.close();

            // Trigger the print dialog
            ticketWindow.print();
        } else {
            alert("Number of persons must be between 1 and 5.");
        }
    });
});
