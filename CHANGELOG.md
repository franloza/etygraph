
# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

# [1.1.4] - 2021-02-22
### Fixed
- Added some missing languages like Serbo-Croatian, specified in ISO 639-3 codes

### Changed
- Consolidate language codes in one single file to speed up load.

# [1.1.3] - 2021-02-22
### Fixed
- Remove self-loops when merge equivalent nodes option is disabled

# [1.1.2] - 2021-02-13
### Fixed
- Fix bug when a word without results is searched after one with results
 
## [1.1.1] - 2021-01-31
### Changed
- Perform a second search with a lower case when a capitalized word returns no results.

## [1.1.0] - 2021-01-31
### Added
- Support for proper nouns
 
### Changed
- Improved auto-complete query to obtain more entries with connections
 
### Fixed
- Removed duplicates from auto-complete
 