import CardMentor from "./card";
const MentorsJudges = () => {
  return (
    <section className="h-screen">
      <center className="block text-3xl font-bold lg:hidden pb-8">
        Mentors & Judges
      </center>
      <div className="absolute">
        <CardMentor />
      </div>
      <div className="flex flex-row">
        <div className="bg-[#4EA2F7] w-1/4 h-screen"></div>

        <div className="w-1/2">
          <center className="invisible lg:visible lg:text-5xl 2xl:text-7xl font-bold pt-8">
            Mentors & Judges
          </center>
        </div>
        <div className="bg-gradient-to-r from-[#4EA2F7] to-[#5AD1CF] w-1/4 h-screen"></div>
      </div>
    </section>
  );
};

export default MentorsJudges;
