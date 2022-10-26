using Vtitbid.ISP20.SaninEremenko.Note;

NoteMenager noteMenager = new NoteMenager();
string name;
string phone;
string birth;
for(int i = 0; i < 3; i++)
{
    Console.Write("Введите имя: ");
    name = Console.ReadLine();

    Console.Write("Введите номер телефона: ");
    phone = Console.ReadLine();

    Console.Write("Введите день рождения: ");
    birth = Console.ReadLine();

    if(!noteMenager.AddNote(name, phone, birth))
    {
        i--;
        continue;
    }
}

noteMenager.ShowNotes();
