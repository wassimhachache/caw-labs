import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div>
      <h1>My Team</h1>

      <ProfileCard
        name="adilchkati"
        role=" Full Stack Developer"
        email="@univ-constantine2.dz"
      />

      <ProfileCard
        name="wassimhachache"
        role="backend developer"
        email="@univ-constantine2.dz"
      />
    </div>
  );
}

export default App;