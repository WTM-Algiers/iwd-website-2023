const About = () => {
    return (
        <section class="absolute">
            
            {/* <div class="grid grid-cols-2 justify-items-center place-items-center gap-7 h-screen pt-7 pb-7">
            
                <div>
                    <img src="\src\assets\About\about-upper-img.png" alt="Boo!" />
                </div>

                <div class="flex items-center flex-col p-7">
                    <h1 class="about-title">
                        What is WTM Algiers ?
                    </h1>
                    <p class="">
                        Women Techmakers is a program created by Google, that encourages women to integrate, pursue, and outshine in technology careers through their Google Developers Groups communities dispersed worldwide. 
                        Women Techmakers Algiers (WTM Algiers) is part of this international community that helps empower and improve the enrollment of women in the STEM field.

                    </p>
                </div>

                <div class="flex items-center flex-col p-7">
                    <h1 class="about-title">
                        What is IWD?
                    </h1>
                    <p class="">
                        Iwd stands for international women's day, an annual event organized by all Women Techmakers chapters in the world to highlight the contributions of women in tech fields to educate and inspire our community.
                    </p>                    
                    <p>
                        Last year's theme was ‘progress not perfection’ but this year's is ‘DareToBe’ to celebrate the woman who challenges their fear to improve and demonstrate their existence in the STEM world.
                    </p>
                </div>

                <div>
                    <img src="\src\assets\About\about-lower-img.png" alt="Boo!" />
                </div>

            </div>  */}
            <img class="upper-border" src="\src\assets\About\upper-border.png" alt="..." />
            <div class=" flex items-center h-screen">

                <div class="w-1/2 h-screen p-7 pb-15">
                    <div class="flex items-center justify-center p-4" >
                        <img src="\src\assets\About\about-upper-img.png" alt="Boo!" />
                    </div>
                    <div>
                        <h1 class="text-center p-4 font-bold">
                            What is IWD?
                        </h1>
                        <p class="text-justify p-4 pb-0">
                            Iwd stands for international women's day, an annual event organized by all Women Techmakers chapters in the world to highlight the contributions of women in tech fields to educate and inspire our community.
                        </p>                    
                        <p class="text-justify p-4 pt-0">
                            Last year's theme was ‘progress not perfection’ but this year's is ‘DareToBe’ to celebrate the woman who challenges their fear to improve and demonstrate their existence in the STEM world.
                        </p>
                    </div>
                </div>
                <img class="about-element" src="\src\assets\About\about-element.png" alt="..." />
                <div class="w-1/2 h-screen p-7 pt-15">
                    <div>
                        <h1 class="text-center p-4 font-bold">
                            What is WTM Algiers ?
                        </h1>
                        <p class="text-justify p-4">
                            Women Techmakers is a program created by Google, that encourages women to integrate, pursue, and outshine in technology careers through their Google Developers Groups communities dispersed worldwide. 
                            Women Techmakers Algiers (WTM Algiers) is part of this international community that helps empower and improve the enrollment of women in the STEM field.
                        </p>
                    </div>
                    <div class="flex items-center justify-center p-4" >
                        <img src="\src\assets\About\about-lower-img.png" alt="Boo!" />
                    </div>
                    
                </div>
            </div>
            <img class="lower-border" src="\src\assets\About\lower-border.png" alt="..." />

        </section>
    )
}

export default About