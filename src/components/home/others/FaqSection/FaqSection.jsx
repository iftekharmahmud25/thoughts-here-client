import Faq from "react-faq-component";
const FaqSection = () => {
    const data = {
        title: "Ask About Us",
        rows: [
            {
                title: "How do I create an account on the website?",
                content: `To create an account, click on the "Sign Up" or "Register" button on the homepage. You will be prompted to enter your email address, choose a username, and create a password. Follow the on-screen instructions to complete the registration process.`,
            },
            {
                title: "How do I submit a blog post or article?",
                content:
                    "To submit a post, log in to your account and go to your dashboard. Click on Add a blog and start creating your content. You can add text, images, and media, format your post, and then submit it for review.",
            },
            {
                title: "Is there a limit to the number of posts I can publish?",
                content: ` There is no limit to the number of posts you can publish. You are free to publish as many posts as you like. `,
            },
            {
                title: "What is the package version",
                content: <p>current version is 1.2.1</p>,
            },
        ],
    };

    const styles = {
        // bgColor: 'white',
        titleTextColor: "black",
        rowTitleColor: "black",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };
    

    return (
        <div className="w-[80%] mx-auto">
             <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
};

export default FaqSection;