<!--
Sync Impact Report - Constitution v1.1.0 → v1.2.0
- Version change: MINOR (principle expanded with comprehensive guidance)
- Modified principles:
  VI. Development Workflow Standardization (expanded with complete Just command taxonomy)
- Added principles: None
- Added sections: None
- Removed sections: None
- Templates requiring updates: ✅ All templates align with updated constitution
- Follow-up TODOs: None
-->

# Sayes Studio Next Generation Constitution

## Core Principles

### I. Modern Library Discovery (NON-NEGOTIABLE)

Before introducing any new library or solution, developers MUST use Context7 or web search to find the latest, most suitable solution. This ensures we leverage the most current, well-maintained, and community-supported libraries rather than outdated or deprecated packages. Research MUST include version compatibility, maintenance status, and community adoption metrics.

### II. Package Management Consistency

All library installations MUST use pnpm commands exclusively. This maintains consistency with our monorepo structure and ensures proper workspace dependency management. Manual package.json editing for dependencies is prohibited; use `pnpm add`, `pnpm remove`, and workspace-specific commands like `pnpm -F workspace-name add package-name`.

### III. Test-First Development (NON-NEGOTIABLE)

TDD is mandatory: Tests written → User approved → Tests fail → Then implement. The Red-Green-Refactor cycle is strictly enforced. All features MUST have corresponding contract tests, integration tests, and unit tests before implementation begins. This ensures reliability and maintainability of our AI-enhanced workflows.

### IV. Monorepo Optimization

Leverage monorepo advantages: simplified dependency management via pnpm workspaces, code sharing through packages/ directory, atomic commits for multi-package changes, consistent tooling via Turborepo, and streamlined CI/CD. All Workers and packages MUST follow the established monorepo patterns for maximum efficiency.

### V. AI-Enhanced Workflows

Every feature MUST consider AI integration opportunities from the design phase. This aligns with our mission to accelerate content creation through AI-enhanced workflows that unify Replicate, Wavespeed, and self-deployed APIs. Features should be designed for future AI extensibility and automation.

### VI. Development Workflow Standardization (NON-NEGOTIABLE)

All development MUST follow the standardized Just command ecosystem organized into four functional groups:

**Primary Development Commands (Group 1)**:

- `just install` - Install dependencies (MUST be first command in any new environment)
- `just check` - Quality validation for deps, lint, types, format (MUST pass before commits)
- `just fix` - Automated corrections for deps, lint, format, workers-types (MUST be used for all fixable issues)
- `just test` - Run tests with vitest (MUST be used for all testing)
- `just build` - Build all projects (MUST be used for production builds)

**Local Development Commands (Group 2)**:

- `just dev` - Context-aware development servers (MUST be used for local development - automatically detects project type and runs appropriate dev command)
- `just preview` - Workers preview mode (MUST be used for preview deployments)
- `just deploy` - Deploy workers (MUST be used for deployments)

**Generator Commands (Group 3)**:

- `just cs` - Create changeset (MUST be used for version management)
- `just gen`/`just new-worker` - Generate new workers (MUST be used for creating workers)
- `just new-package` - Create shared packages (MUST be used for new packages)

**Utility Commands (Group 4)**:

- `just update deps` - Update dependencies (MUST be used for dependency updates)
- `just update pnpm`/`just update turbo` - Update tooling versions
- `just runx` - Access CLI tools (provides access to underlying bun runx commands)

These commands provide consistent tooling across the monorepo with context-aware behavior, tabular output showing execution results, and automated error detection. Manual execution of underlying tools (eslint, prettier, syncpack, turbo) is discouraged in favor of these unified workflows.

## Development Standards

### Technology Stack Requirements

- Node.js v22+ for runtime compatibility
- pnpm v10+ for workspace management
- Bun 1.2+ for enhanced performance
- TypeScript for type safety across all packages
- Cloudflare Workers for serverless deployment
- Turborepo for build orchestration

### Dependency Management Policies

- Use `syncpack` to maintain version consistency across workspaces
- Workspace dependencies MUST use `workspace:*` protocol
- External dependencies MUST be researched via Context7/web search
- Security scanning required for all new dependencies
- Regular dependency updates following semantic versioning

### Workflow Command Requirements

**Development Lifecycle Integration**:

- **Environment Setup**: `just install` MUST be the first command in any new environment or after dependency changes
- **Development Phase**: `just dev` MUST be used for all local development (automatically detects context and runs appropriate tools)
- **Quality Assurance**: `just check` MUST pass before committing changes (validates deps, lint, types, format with tabular results)
- **Issue Resolution**: `just fix` MUST be used for all automatically correctable issues (deps, lint, format, workers-types)
- **Testing Phase**: `just test` MUST be used for all test execution with vitest
- **Build Phase**: `just build` MUST be used for production builds via turbo
- **Deployment Phase**: `just deploy` MUST be used for worker deployments

**Development Workflow Patterns**:

- **New Feature**: `just install` → `just dev` → iterative development → `just check` → `just fix` → `just test` → `just build`
- **Bug Fix**: `just check` → `just fix` → development → `just test` → `just check` → commit
- **Dependency Updates**: `just update deps` → `just fix --deps` → `just test` → `just check`
- **Project Generation**: `just new-worker` or `just new-package` → `just install` → `just dev`

**Context-Aware Behavior**:

- Commands automatically detect project type and execution context
- `just dev` intelligently chooses between `pnpm dev`, `pnpm turbo dev`, or project-specific commands
- Commands provide tabular output showing execution results and error status
- All commands support parallel execution where appropriate (marked with [P] in task planning)

## Quality Gates

### Code Review Requirements

- All PRs MUST verify constitutional compliance
- Library research documentation required for new dependencies (using Context7/web search per Principle I)
- Test coverage MUST meet minimum thresholds (validated via `just test`)
- Performance impact assessment for AI workflow features
- Security review for authentication and API integrations
- MUST pass complete `just check` validation before review approval (deps, lint, types, format)
- MUST demonstrate successful `just build` execution for production readiness
- MUST include evidence of `just fix` usage for all automatically correctable issues
- Development workflow compliance: proper use of Just command patterns throughout feature development

### Testing Gates

- Contract tests for all external integrations
- Integration tests for multi-package interactions
- Performance benchmarks for AI-enhanced features
- End-to-end testing for complete user workflows
- Compatibility testing across target platforms

### Deployment Approval Process

- Constitutional compliance verification
- Security and performance validation
- AI workflow integration testing
- Rollback procedures documented
- Monitoring and observability configured

## Governance

The constitution supersedes all other development practices and guidelines. Amendments require documentation of rationale, impact assessment, and migration plan for existing code. All development decisions MUST align with our core mission of unifying AI-enhanced content creation tools.

Complexity introductions MUST be justified against simpler alternatives. When constitutional principles conflict, prioritize in order: Modern Library Discovery, Test-First Development, Development Workflow Standardization, Package Management Consistency, Monorepo Optimization, AI-Enhanced Workflows.

All team members and AI assistants MUST verify compliance during feature development, code review, and deployment processes. Use this constitution as the primary guidance for runtime development decisions.

**Version**: 1.2.0 | **Ratified**: 2025-01-14 | **Last Amended**: 2025-01-23
