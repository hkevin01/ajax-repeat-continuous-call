# Development Workflow

## Branching Strategy
- Use `main` for stable releases
- Use `dev` for active development
- Feature branches: `feature/<name>`
- Bugfix branches: `bugfix/<name>`
- Pull requests must be reviewed before merging

## CI/CD Pipeline
- GitHub Actions for build, test, and deploy
- Automated linting and formatting checks
- Run unit tests on every push and PR
- Deploy to staging on successful test pass
- Manual approval for production deploys

## Code Review Process
- All PRs require at least one approval
- Use issue and PR templates for consistency
- Check for code style, documentation, and test coverage
- Address review comments before merging

## Issue Management
- Use labels for bug, enhancement, documentation, etc.
- Assign issues to milestones
- Link PRs to relevant issues

## Security
- Report vulnerabilities via SECURITY.md
- Review dependencies for known issues
