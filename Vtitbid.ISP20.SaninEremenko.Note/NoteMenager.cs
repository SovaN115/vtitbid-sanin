using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Vtitbid.ISP20.SaninEremenko.Note
{
    public class NoteMenager
    {
        delegate void ShowErrDelegate();
        delegate void ShowNotesDelegate();
        private List<Note> NoteData = new List<Note>();

        public bool AddNote(string name, string phone, string birth)
        {
            string[] birthArr = new string[3];

            if (CheckDate(birth))
            {
                birthArr = birth.Split("-");
                NoteData.Add(new Note(name, phone, new DateTime(Convert.ToInt32(birthArr[2]), Convert.ToInt32(birthArr[1]), Convert.ToInt32(birthArr[0]))));
                return true;
            } else
            {
                ShowErrs();
                return false;
            }
        }

        private void ShowNoteToConsole()
        {
            for(int i = 0; i < NoteData.Count; i++)
            {
                Console.WriteLine($"{i+1}. {NoteData[i]}");
            }
        }

        private void ShowNoteToSomethink()
        {
            for (int i = 0; i < NoteData.Count; i++)
            {
                Console.WriteLine($"{i + 1}. {NoteData[i]} \"Не консоль\"");
            }
        }

        private void ShowErrToConsole()
        {
            Console.WriteLine("Ошибка");
        }

        private void ShowErrToSomethink()
        {
            Console.WriteLine("Ошибка \"Не консоль\"");
        }

        public void ShowNotes()
        {
            ShowNotesDelegate show;
            show = ShowNoteToConsole;
            show += ShowNoteToSomethink;
            show?.Invoke();
        }

        private void ShowErrs()
        {
            ShowErrDelegate err;
            err = ShowErrToConsole;
            err += ShowErrToSomethink;
            err?.Invoke();
        }

        public bool CheckDate(string birth)
        {
            if (Regex.IsMatch(birth, @"\d{2}-\d{2}-\d{4}"))
            {
                return true;
            }

            return false;
        }
    }
}
