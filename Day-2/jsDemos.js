//Constructor function demo
function Employee(id,firstName,salary){
   var _id = id,
       _firstName = firstName,
       _salary = salary;
   if (this.constructor.name !== "Employee") return new Employee(id,firstName,salary);
   this.Id = function(){
       if (arguments.length === 0) return _id;
       _id = arguments[0];
   };
   
   this.FirstName = function(){
       if (arguments.length === 0) return _firstName;
       _firstName = arguments[0];
   };
   this.Salary = function(){
       if (arguments.length === 0) return _salary;
       _salary = arguments[0];
   }
}