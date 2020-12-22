# capstone-project-northark
capstone-project-northark created by GitHub Classroom




                                            Capstone Project by North Ark


#Abstract:

My Goal for this project was to create an online bidding system for used cars. A user will have to register himself/herself in order to view or post an advertisement. The way it will work is that once a user is logged in he or she will be able to see all the posted advertisements as most of the buy and sell websites. Since in our city I see there is no website where you can post your vehicle for bidding. So I thought it would be convenient for the people who wish so.Since we recently were taught Web APIs where the front connects with the back end via an http request. So I thought it would be efficient to use React as the front end and ASP.NET Core and mySql as backend. 

#Challenges: 

With being new to the industry it seemed kind of challenging. I was quite clear on ASP,NET Core and mysql but while doing the project there were a lot of challenges which I will describe briefly.
Image upload: was most vital in my project as consumers will have to see what he is bidding on. I spent a lot of time researching, and asked peers turns out most of them were struggling too with that. So finally I decided to drop the image upload as the timeline was very short.
Identity: My project also involved some sort of authentication for transaction purposes. In the beginning I was sure It won't be that big of a challenge but turned out it is pretty challenging. But hopefully I am working on a basic level of authentication which will let users log in and log out so that their information is not manipulated.
Axios: Being a vital tool in today's web development it was a little challenging too as when you use it with react it gets a little complicated.
Design: It was the most challenging part of the project as I had no idea where to start from. How many tables do I need? I made a basic blueprint which I will paste below which gave me a starting point as where to start from.


How I am dealing with the challenges:

Image upload seemed time consuming as anticipated since it was not a big part of the project so I am dropping it at this point. I will enable it down the road as It will add foremost functionality to my website.

Axios: I figured it is better to add method headers and parameters separately as I would with major bugs and you would see I have mostly adopted this feature in my application. Also added catch with console logging errors so that debugging becomes little easy.

Authentication: It was the hardest of all but I was something which was need for the project So How did I create it:

Created a file Auth.js where i created a hook called Authcontext  from the hook from react called useContext.
Placed all the routes within AuthContext.
Then created a file called private.js where I defined only a user with auth token is allowed to navigate pages defined in this route.
Created a login page with an axios post call to my database with API end to the login method in UserController. It sends the user provided username and password checks if the user the given credential exists in the database. If yes the controller method sends statusCode 200 which authenticates the user and creates a token in the local storage.
When this token is created it setsLogged to true. So now an authenticated user can navigate through all the private routes. If a user types username and password which does not match any user in the database it sends a status code of 401 which means unauthorized. Which then sets authentication to false and redirects the user to the login page again.

#Technicalities:

I created a wire diagram of my table and layout of my website which I will be using in this project.
I choose Visual Studio 2019 mainly because of the debugging tools and many other features.
I cloned my repository from the classroom github which is by default empty. I used the Visual Studio clone tool and I created this project within a folder.
After that within that folder I created a new project by choosing the option of ASP.NET Core MVC with React JS. I will use React as my Front End and ASP.NET Core with  MySql by XAMPP as a backend.
After my project was created I deleted the unnecessary files like weather.cs and weather controller with the controller folder.
Now I had a completely empty project with no scaffolded items as I was going to use react and I am sure there is no scaffolding available  to react and redux with ASP.NET Core.
Now was the time to create a Model folder. So created one.
Added 4 classes to it as Vehicles, Users ,Transactions  and SaleContext the first 3 will  serve as tables as I am using code first approach to design the tables in my database and the last one in from base class DBcontext where I will define my connection string with the mysql(XAMPP) database, foreign key relations and seeding if needed which I did testing purposes.
So now when my tables were ready it was time to install the packages needed for the project which are as follows:

                          Make sure right versions are installed otherwise it creates version clash.
                            1.        Microsoft.AspNet.WebApi.Core v5.2.7
                            2.        Microsoft.AspNet.Core.Mvc.NewtonsoftJson v3.1.9  
                            3.        Microsoft.EntityFrameworkCore.Design     v3.1.9
                            4.        Microsoft.EntityFrameworkCore.SqlServer  v3.1.10
                            5.        Pomelo.EntityFrameworkCore.MySql          v3.2.4
                            6.        Microsoft.VIsualStudio.WebGenerator       v3.1.4

 
After completing the tables with the required tables I did migration with the commands as (dotnet ef migrations add “here you put the migration name could be anything but convention says use Initial migration”). To apply the migration You need a run command to update the table structure to the database as (dotnet ef database update).
After migration my database is ready to take all the workload provided so now I had to set up my controllers. So I started with Vehicle controller where I defined all the methods needed for my project.
For you just have to clone the repository add command “dotnet restore” that would be able to get all the dependencies needed for the project.
For the front end you will go to the terminal and run “npm instal”l and similarly It will install all the packages for React needed.


Methods I created for User:
HttpGet method to get user by userID
HttpPost method to add a new user to the database
HttpPost login method to get status code if the user with the given username and password exists in the database


Methods I created for Vehicle:
HttpGet method to get the listing with given ID
HttpGet method to get all the listings in the database
HttpPost method to add a new Listing to the database
HttpPut to update the listing in the database
HttpDelete to delete the listing in the database with the given ID


Since I didn't get time to do work on my Transactions table I will be putting all the methods needed for bidding purposes in future.


Front End:


For Front I used React js which is loved by mostly every web developer.
SInce Visual Studio 2019 comes with a package installed when you select the React js so we don't need to run create-react-app.

I started with creating LoginPage as login.js where you enter the username and password if found it will direct you to the last page you were browsing. Since I could not figure out the place the logout functionality in the nav bar So I pasted a link in the navbar which directs  you to the logout page. So If you decide to remove the history props feature it will redirect to the home page always. 

Register user: You have to register yourself to before you can login otherwise you won't be authenticated. I have pasted the link in the navigation bar and login form.

Get Listing: I created functional component page which makes an axios get call when you submit it gets all the posted listings

Update Listing: on the get listing page I have pasted links for edit and delete when you click on edit it will take you to the edit page where It will the existing information about the listing and you can edit and save it there.

Delete Listing: as an edit feature there is a link in each listing where you can delete the listing so I have not figured out how to get the userID of the logged in  user which I might depend on time left.

How to install this:
Open visual studio 2019
Clone the repository
Paste the link in the visual studio in the clone from a repository option
Then click continue to create the folder and choose the location of the repository.
Once the cloning is done click on tools choose Nuget Package Manager and choose Package Manager Console
There you will cd into the project folder if not sure about the project name run ls command and it will populate a list of folders and cd into the right project folder
After that run command “dotnet restore” it will install all the packages needed for ASP.NET Core Environment 
Then run the “npm install” command and it will install all the dependencies needed for the react part to work.
After these packages are installed you should be able to run the app.
Wait, we have  not done migrations yet.
So I have defined my connection string in the SaleContext class inside Models folder of my Project.
There you can change the server version, name, password and path name if you are using XAMPP you should be able to make it work just by changing the name of the database on version if it's different than mine. 
Now after that go back to the package manager console and run these commands:
Dotnet ef migrations add “any name you want without these quotes”. HIt enter
Dotnet ef database update. Hit enter


If you will encounter any errors try adding -v after the commands which will show you errors if any.
Now after this you can go ahead and use the app
So in visual studio 2018 click on build app and your server should be running.
If everything went well you will be able to use the application 
So you will see the first screen as login where beneath the form you will see I don't have an account
Click on that link 
It will take to registration 
So here please enter your information with your username and password
If username and password you passed are correct and same as registration you will be authenticated and you will land on the homepage
There up in the navigation bar you will see my listings since at the moment I was not able to grab the username or id of the logged in user so there I am displaying all the list with edit and delete features.
I found a bug that when you edit something for the first time It does edit but the edited version doesn't show up in the list. So if you refresh the list you will see the edited version then after that it is not a problem.
If  you click on the delete it will delete and take out of the list right away.

#FInal Scope:

Does it solve the problem: At the moment NO. After I will be able to persist the username state of the logged in user then It will solve the problem. But right now the majority of the features are all set.

What I couldn't finish:
I did not have enough time to research how to persist the state of the user for the username so that I could personalize the data.

Some validation was clashing with the back end so I had to get rid of them for the moment. My code needs a lot of validation to clean the data going to the database.

Bid Feature: as I couldn't figure out the state of username so It was useless to have a bidding feature on my project. So I will have to figure out the logic of how to persist the state of the username so that user information can be saved.






