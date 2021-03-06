- This is Restful api to store questions and their annotations
- This project has been built using these technologies (Nodejs - expressjs - Mongodb)
- to run this project locally please clone this project and run these commands at your cmd =>
- ```
     npm install
     npm run devStart
  ```
- the server of this project works on port 6000
- the database is hosted on mongodb Atlas https://docs.mongodb.com/ , you can access it from mongodb compass GUI
     ```
     mongodb+srv://milad:Zwhe24ZOK4XD6JuB@cluster0.grdq6.mongodb.net/QuestionsAndTopicsDB
     ```
- you can specify  your local connection string from  .env file
- To fetch data you can use Postman and follow these API's calling

     ```
     ==== To add Question ==========

     Method: POST
     endpoint:https://secure-escarpment-49908.herokuapp.com/questions/addQuestion
     body:
     {
      "title":"1"
     }


     ==== To add Annotation to specific question ========

     Method: POST
     endpoint: https://secure-escarpment-49908.herokuapp.com/questions/addAnnotation
     body:
     {
          "questionId":"6234b247a645b0f33ff3ef89",
          "title":"Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans" 
     }



     ====To get all Questions=====

     Method: GET
     endpoint:  https://secure-escarpment-49908.herokuapp.com/questions
     Result:
     [
         {
             "annotations": [],
             "_id": "6234ad57e3fd365dfc40c7e4",
             "Question number": "1"
         },
         {
             "annotations": [],
             "_id": "6234ad57e3fd365dfc40c7e5",
             "Question number": "2"
         },
         {
             "annotations": [],
             "_id": "6234ad57e3fd365dfc40c7e6",
             "Question number": "3"
         },
         {
             "annotations": [],
             "_id": "6234ad57e3fd365dfc40c7e7",
             "Question number": "4"
         },
         {
             "annotations": [],
             "_id": "6234ad57e3fd365dfc40c7e8",
             "Question number": "5"
         },
          ...
     ]


     ============To remove question by Id============

     Method: DELETE
     endpoint:  https://secure-escarpment-49908.herokuapp.com/questions/6235dbedbe7994512889f750
     Result: Removed successfully



     ============= To Search about questions using some topic ================
     Method: GET
     endpoint:  https://secure-escarpment-49908.herokuapp.com/questions/search?q=Golgi%20body
     Result:
     [
         {
             "_id": "6234ad57e3fd365dfc40c7e5",
             "Question number": "2",
             "annotations": [
                 {
                     "_id": "6234b28ea645b0f33ff3ef92",
                     "title": "Golgi body"
                 },
                 {
                     "_id": "6234b29da645b0f33ff3ef95",
                     "title": "Reducing sugars (Benedict's solution)"
                 },
                 {
                     "_id": "6234b2a9a645b0f33ff3ef98",
                     "title": "Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels"
                 },
                 {
                     "_id": "6234b2b6a645b0f33ff3ef9b",
                     "title": "Explain what is meant by an endocrine gland, with reference to the islets of Langerhans in the pancreas"
                 }
             ]
         },
         {
             "_id": "6234ad57e3fd365dfc40c87f",
             "Question number": "156",
             "annotations": [
                 {
                     "_id": "6234ba6a07dbed7b33a2c06f",
                     "title": "Compare the structure of typical animal and plant cells"
                 },
                 {
                     "_id": "6234ba7707dbed7b33a2c072",
                     "title": "Golgi body"
                 }
             ]
         },
         {
             "_id": "6234ad57e3fd365dfc40c8a0",
             "Question number": "189",
             "annotations": [
                 {
                     "_id": "6234bab307dbed7b33a2c075",
                     "title": "Discuss the function of the brain and spinal cord in producing a co-ordinated response as a result of a specific stimulus in a reflex action"
                 },
                 {
                     "_id": "6234bac107dbed7b33a2c078",
                     "title": "Golgi body"
                 },
                 {
                     "_id": "6234bace07dbed7b33a2c07b",
                     "title": "Explain co-dominance and multiple alleles with reference to the inheritance of the ABO blood group phenotypes (A, B, AB and O) and the gene                            alleles (I???, I??? and I???)"
                 },
                 {
                     "_id": "6234bada07dbed7b33a2c07e",
                     "title": "Describe the intake of carbon dioxide and water by plants"
                 }
             ]
         }
     ]
     ```
