namespace Vtitbid.Sanin.Console.Models
{
    public class Student : Person
    {
        public string Group { get; set; }
        public Student(string FirstName, string Lastname, string group)
            : base(FirstName, Lastname) 
        {
            Group = group;
        }

        public Student(Person person, string group) 
            : base(person.LastName, person.FirstName)
        {
            Group = group;
        }
    }


}
