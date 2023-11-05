

const Feature = ({ feature }) => {

    const { featureName, description, photoUrl } = feature;

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className="h-[200px] w-full" src={photoUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{featureName}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;