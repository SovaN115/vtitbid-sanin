using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vtitbid.ISP20.SaninEremenko.Note
{
    public class Note
    {
        public string Name;
        public string Phone;
        public DateTime Birth;

        public Note(string name, string phone, DateTime birth)
        {
            Name = name;
            Phone = phone;
            Birth = birth;
        }

        public override string ToString()
        {
            return $"Имя: {Name}, Телефон: {Phone}, День рождения: {Birth.Date}";
        }
    }
}
