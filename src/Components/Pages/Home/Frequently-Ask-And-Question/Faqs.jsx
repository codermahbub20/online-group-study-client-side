

const Faqs = () => {
    return (
        <div>
            <div className="text-center mt-5 space-y-5">
                <h5 className="text-[#FF3811] text-xl font-medium">POPULAR QUESTIONS</h5>
                <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
            </div>

            <div className="lg:flex sm:gap-5 md:gap-10  space-y-5">
                <div className="flex-1 mt-5 space-y-3">
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        What is online group study?
                        </div>
                        <div className="collapse-content">
                            <p>Online group study is a collaborative learning approach where individuals come together virtually to study, share resources, and discuss academic topics to enhance their understanding and retention of material.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        How can I find or create an online study group?
                        </div>
                        <div className="collapse-content">
                            <p>You can find study groups on social media, educational websites, or create your own using platforms like Zoom or Discord.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        What are the advantages of online group study?
                        </div>
                        <div className="collapse-content">
                            <p>Benefits include diverse perspectives, shared resources, accountability, improved understanding, and reduced isolation during remote learning</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        What platforms or tools are best for online group study?
                        </div>
                        <div className="collapse-content">
                            <p>Zoom, Discord, Google Meet, and collaborative study apps are commonly used for online group study.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        How do I set study goals and schedules in a group?
                        </div>
                        <div className="collapse-content">
                            <p>Collaboratively set clear study goals, create a schedule, and assign responsibilities to group members.</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <img className="h-3/4 md:1/2 rounded-lg" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/img-1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faqs;