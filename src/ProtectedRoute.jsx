export default function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem("token"); // Vérifier le token dans les cookies

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated != null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" /> // Rediriger vers la page de connexion
        )
      }
    />
  );
}
