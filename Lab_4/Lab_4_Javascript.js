       var dictionary = new Array;
       var text = '';
       function AddDictionary()
       {
           var count = 0;
           var _key="";
           var _value="";
            _key = document.getElementById("txt1").value;
            _value = document.getElementById("txt2").value;
           if(_key === "" || _value === "")
           {
               alert("Porfavor ingrese un valor");
           }
           else
           {

            dictionary.push({
               key: _key,
                value: _value          
            });
            alert(dictionary[0].value);

           }
           
           
       }

       function getElement()
       {
        //var output = document.getElementById('output');
        ShowData();
  
           for(var pair in dictionary)           
          {   
               text += pair.key;
               output.innerHTML = pair.key;
               output.innerHTML = pair.value;

               alert(pair.key);
               //ShowData(text);
           }
       
           $('body').append(text);        
       }

       function ShowData()
       {
           //alert(JSON.stringify(dictionary));
           document.getElementById("txtArea").value = JSON.stringify(dictionary);     
           

       }



