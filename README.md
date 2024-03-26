# Corona-management-system
# Description
This system is a Corona database management system for a large health fund.
The system shows the members of the health insurance fund, allows
editing and deleting them, and manages the records in the database.
# 💼 Languages and Tools
### Languages: <br />
#### Client side:<br />
  * JavaScript
  * Css
  * HTML <br />
#### Server side: <br />
  * Node js
#### Database: <br />
  * Mongodb <br />
#### Libraries: <br /> 
  * mongoose <br /> 
  * ejs <br /> 
  * express <br /> 
### Workspace: <br /> 
  * Visual Studio Code version: 1.74.1 <br />
# Installation
In order to run the program on your computer, please do the following in order:
1. Take the http code of the project: ```https://github.com/EstyBlotnik/Corona-management-system.git```.
2. Clone it on your computer in the desired folder.
3. Navigate to the project directory cd Corona-management-system.
4. Install the dependencies ```npm install```.
5. Run the project ```npm run dev```.
6. You have to see this:<br />
![image](https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/278bb2c8-337b-447b-bca2-5c38ec5b610c) <br>
# How to use our service
## connection:
Now that the server is working, we will connect to it via ```localhost:3000```:
This will open the main page that shows us the names of all the members of the health fund and their ID number:
![image](https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/4578482c-b3c2-4d3f-9329-a2836ad57ddf) <br>
## Add a new member:
To add a new member tap on "**Add a new member**":<br>
A page will open to you where you need to fill in the personal details of the new member we want to add:<br>
<img width="945" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/a7eccade-b28a-4c6f-8309-c19e2c582ad3">
<img width="949" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/95cd435e-0df9-4343-919e-eb372e291684"> <br>
Example of filling in details:<br>
<img width="956" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/7914fb50-0929-40c0-a43c-52a65ebde2f7">
<img width="959" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/1c01b834-be6c-4ca7-a412-24f93505cd9d"> <br>
Now press "submit":<br>
<img width="959" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/fced77d5-d607-47c2-8b65-79556de836ae">
<img width="960" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/5713ff58-fa1f-4bcb-b665-01b139a04279"> <br>
Member successfully added!
By pressing solve back you can return to the main page.
<img width="960" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/ef071f30-9646-43f4-96ad-0e41b3305b2c"> <br>
## Viewing member details:
From the main page you can view a member's details by tapping on "more details":
<img width="634" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/c5c6ea3e-8422-4fdf-a2f6-2748e0acccac">
<img width="960" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/33e5ebfd-23b5-47e8-b5c1-af26a8090df5"> <br>
## Adding COVID-19 information:
### vaccine:
To add information about a vaccine, click on "add a vaccine"
Then a page will open where you can fill in the vaccination details: <br>
<img width="960" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/c3a43502-93b0-4f1f-b59d-9bb90276c20b"> <br>
Enter details. For example: <br>
<img width="960" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/cbc18925-dc7b-44df-923b-f0973add4eb8"> <br>
and then tap on"submit":<br>
You can see that the addition was successful:
<img width="920" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/5e082aed-9cf4-4a1c-b2f1-e9ee407c9c11"> <br>
### positive result:
If the member does not yet have a positive result date, it can be added by selecting a date and pressing add date:
<img width="644" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/efff800d-fe49-41a6-bf1b-c9b6768f881f"> <br>
The date of the positive answer has been added:<br>
<img width="947" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/762d56fb-8488-4190-b048-ad7127e8a05e">

if there is a date of a positive answer and there is no date of recovery, a date can be added in the same way as adding a date of a positive answer:
<img width="940" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/2c9e19a5-bc89-4f98-bb5f-16d725ece91b">
<img width="947" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/2a366a33-7703-4f35-8f29-d8935965b71d">
You can see that all the Corona details have been successfully added.
## Editing a member:
Inside the member's information there is a delete button. <br>
<img width="169" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/07b4b391-7e62-4f82-9960-ad3f5cffe057"> <br>
 Clicking on it opens an editing page:
 <img width="494" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/e6e052bc-433b-4e87-8f63-b4f29941d150"> <br>
For the sake of the experiment let's change the first name from "Rivky" to "Rivka":
<img width="503" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/b0d969d4-b1ec-4923-921c-54ccf6fd9b87"> <br>
Now click on "Save changes": <br>
<img width="947" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/3a39e65d-a5a2-4258-ba2f-4640500aee99">
You can see that the name has been changed successfully.

## Deleting a member:
Inside the member's information there is a delete button.
<img width="263" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/1f0e96d3-1385-47a0-897e-d38021382474"> <br>
By clicking on it, you will receive a deletion confirmation message: <br>
<img width="338" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/12f58775-a902-4366-9596-c90ad54abfdf"><br>
By clicking OK you will receive a message that the user has been successfully deleted. <br>
<img width="341" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/851c8e79-3a81-45e7-92e3-0d498820ee91"> <br>
Then you will be returned to the main page and you can see that the user no longer exists
<img width="960" alt="image" src="https://github.com/EstyBlotnik/Corona-management-system/assets/118099586/c5293bf9-d407-4bd4-8a3f-e2c0e93ac85c">


