       var dictionary = new Array;
       var text = '';
       function AddDictionary()
       {
           var count = 0;
           var _key="";
           var _value="";
           var flag = false;
           if(dictionary.length == 0)
           {
            _key = document.getElementById("txt1").value;
            flag = true;
           }
           else{
            for (var i = 0; i <dictionary.length; i++) {
                if(dictionary[i].key === document.getElementById("txt1").value)
                {
                    flag = false;
                    i = dictionary.length;
                } 
                else{
                    flag = true;
                    _key = document.getElementById("txt1").value;
                }
           }    
        }
         if(flag)
         {
            if(document.getElementById("txt2").value==="true")
            {
                
                _value = true;
            }
            else if(document.getElementById("txt2").value==="false")
            {
                
                _value =false;

            }
            else if(parseInt(document.getElementById("txt2").value))
            {
                
                _value =parseInt( document.getElementById("txt2").value);

            }
            else
            {
                
                _value = document.getElementById("txt2").value;
            }
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
           }           
         }
         else{
             alert("La llave ingresada ya existe");
         }

         document.getElementById("txt1").value = "";
           
           
       }


       function ShowData()
       {
           document.getElementById("txtArea").value = JSON.stringify(dictionary);     
       }

       function ConvertToXml()
       {
           var xml = "<Xml>\n <Dictionary>\n";
           for (var i = 0; i <dictionary.length; i++) {
            xml += "   <Element>\n";
            xml += "     <Key>"+ dictionary[i].key+ "</Key>\n     <Value>"+ dictionary[i].value + "</Value>\n";
            xml += "   </Element>\n";
         }
           xml += " </Dictionary>\n</Xml>";
           document.getElementById("txtArea").value = xml;  
       }



