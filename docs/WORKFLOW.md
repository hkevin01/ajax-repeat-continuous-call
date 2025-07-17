# WORKFLOW

This document describes the development workflow for the ajax-repeat-continuous-call project.

## Branching Strategy
- Use `master` for stable releases
- Create feature branches for new features (`feature/<name>`)
- Use pull requests for merging changes

## CI/CD Pipelines
- GitHub Actions automate build, test, and deploy
- Workflows are defined in `.github/workflows/`
- All commits and pull requests trigger automated tests

## Code Review
- All changes require code review via pull requests
- Use PR templates for consistency
- CODEOWNERS file defines reviewers

## Deployment
- Automated deployment via GitHub Actions
- Manual deployment scripts available in `scripts/`

## Contribution
- Follow guidelines in `CONTRIBUTING.md`
- All contributors must sign off on changes
