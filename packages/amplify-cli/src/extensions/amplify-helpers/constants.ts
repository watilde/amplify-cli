export const amplifyCLIConstants = Object.freeze({
  AmplifyCLIDirName: 'amplify',
  DotAmplifyDirName: '.amplify',
  DotConfigamplifyCLISubDirName: '.config',
  BackendamplifyCLISubDirName: 'backend',
  CurrentCloudBackendamplifyCLISubDirName: '#current-cloud-backend',
  ProjectConfigFileName: 'project-config.json',
  amplifyMetaFileName: 'amplify-meta.json',
  BrandName: 'Amplify Framework',
  CliName: 'amplify',
  DateTimeFormatString: 'YYYY-MM-DD-HH-mm-ss',
  DateTimeFormatStringCompact: 'YYYYMMDDHHmmss',
  DefaultAWSAccessKeyId: '<YOUR_ACCESS_KEY_ID>',
  DefaultAWSSecretAccessKey: '<YOUR_SECRET_ACCESS_KEY>',
  DefaultAWSRegion: 'us-east-1',
  LocalEnvFileName: 'local-env-info.json',
  ProviderInfoFileName: 'team-provider-info.json',
  BackendConfigFileName: 'backend-config.json',
  TagsFileName: 'tags.json',
  // Minimum version in project for migration scenarios, increase when a new migration is added
  MIN_MIGRATION_PROJECT_CONFIG_VERSION: '3.0',
  // Minimum version in project for migration scenarios, increase when we phasing out newer node.js versions
  MIN_NODE12_PROJECT_CONFIG_VERSION: '3.1',
  CURRENT_PROJECT_CONFIG_VERSION: '3.1',
  BreadcrumbsFileName: 'amplify.state',
  LogDirectory: '.amplify-log',
} as const);
