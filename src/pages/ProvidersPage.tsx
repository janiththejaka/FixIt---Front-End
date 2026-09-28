import { useProviders } from "../features/profile/hooks/useProviders";

function ProvidersPage() {
  const {
    data: providers,
    isLoading,
    isError,
  } = useProviders();

  if (isLoading) {
    return <p>Loading providers...</p>;
  }

  if (isError) {
    return <p>Failed to load providers.</p>;
  }

  return (
    <div>
      <h1>Service Providers</h1>

      {providers?.map((provider: any) => (
        <div key={provider.profileId}>
          <h2>{provider.fullName}</h2>
          <p>{provider.location}</p>
        </div>
      ))}
    </div>
  );
}

export default ProvidersPage;