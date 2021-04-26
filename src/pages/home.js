import '../index.css';

function Home() {
  return (
    <div className="form-div">
        <h1>Hey!</h1>
        <br/>
        <p>Welcome to the platform. Become a registered user to explore more features that are available</p>
        <a className="btn btn-primary mx-3" href="/register" role="button">SignUp</a>
        <a className="btn btn-info mx-3" href="/login" role="button">LogIn</a>
    </div>
  );
}

export default Home;
