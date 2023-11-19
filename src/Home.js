import Banner from './Banner';
import Card from './Card';
import './Home.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className='home'>
      <Banner />

      <div className='home__section'>
        <div className='home__row'>
          <Card
            src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202311/airbnb-sixteen_nine-sixteen_nine.jpg?size=948:533"
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
            title="Unique stays"
            description="Spaces that are more than just a place to sleep."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            title="Entire homes"
            description="Comfortable private places, with room for friends or family."
          />
        </div>
        <div className='home__row'>
          <Card
            src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
            title="3 Bedroom Flat in Bournemouth"
            description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
            price="£130/night"
          />
          <Card
            src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
            title="Penthouse in London"
            description="Enjoy the amazing sights of London with this stunning penthouse"
            price="£350/night"
          />
          <Card
            src="https://media.nomadicmatt.com/2018/apartment.jpg"
            title="1 Bedroom apartment"
            description="Superhost with great amenities and a fabulous shopping complex nearby"
            price="£70/night"
          />
        </div>
        <div className='home__row'>
          <Card
            src="https://a0.muscache.com/im/pictures/3b638d62-baa9-4bea-ba33-58c5ca4bbccb.jpg?im_w=480"
            title="Flats"
            description="Convenient locations with everyday essentials"
            price="£130/night"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/93999e13-e402-45b7-ac70-ecb90ed8473a.jpg?im_w=480"
            title="Chalets"
            description="Adventure ready homes with apres-ski style"
            price="£350/night"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/SeoLandingPage/PropertyType/original/1e465805-b4b5-49ab-8604-b5e8bec72fee.jpg?im_w=480"
            title="Cabins"
            description="Kick-off your hicking boots at these rustic lodgings"
            price="£70/night"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;


