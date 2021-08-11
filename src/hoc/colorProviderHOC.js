const colorProviderHOC = (ComponentThatWasPassedIn) =>  {
  // maybe we used axios and called an api.
  const color = 'red';

  return () => <ComponentThatWasPassedIn color={color} />
}

export default colorProviderHOC;