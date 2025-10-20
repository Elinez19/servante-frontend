# 🌿 Git Workflow Rules

## Daily Development

### Start of Day - Update Your Feature Branch

```bash
git checkout development
git pull origin development
git checkout your-feature-branch
git merge development
```

## If Conflicts Occur

### Step-by-Step Conflict Resolution

```bash
# 1. When merge shows conflicts
git status  # Check conflicting files

# 2. Open each conflicting file and resolve conflicts
# Look for <<<<<<< HEAD, =======, and >>>>>>> markers

# 3. After resolving
git add .
git commit -m "resolved conflicts with development branch"
```

## When Stuck/Need to Reset

### Reset Your Feature Branch

```bash
# If you need to undo changes in your feature branch
git fetch origin
git reset --hard origin/development
git checkout -b feature/your-branch-name
```

## Before Making Pull Request

### Pre-PR Checklist

```bash
# 1. Update your branch
git checkout development
git pull origin development
git checkout your-feature-branch
git merge development

# 2. Fix any conflicts
# 3. Test your changes
# 4. Then push
git push origin your-feature-branch
```

## Emergency Fix Process

### Quick Bug Fix

```bash
# If you find a bug in your feature
git checkout your-feature-branch
# Fix the issue
git commit -m "fix: description of the fix"
git push origin your-feature-branch
```

## ⚠️ Important Rules

- **NEVER** push directly to `master` or `development`
- Always create Pull Request for review
- Keep commits small and focused
- Write clear commit messages
- Pull from development daily
- Resolve conflicts in your feature branch

## 🚨 Commit Message Format

| Type        | Description           | Example                             |
| ----------- | --------------------- | ----------------------------------- |
| `feat:`     | Add new feature       | `feat: add user authentication`     |
| `fix:`      | Bug fix               | `fix: resolve login redirect issue` |
| `style:`    | Styling changes       | `style: update button colors`       |
| `refactor:` | Code refactoring      | `refactor: optimize API calls`      |
| `docs:`     | Documentation updates | `docs: update README`               |
| `test:`     | Adding tests          | `test: add unit tests for auth`     |

## 🔄 Branch Naming

- `feature/feature-name` - New features
- `bugfix/bug-description` - Bug fixes
- `hotfix/urgent-fix` - Urgent production fixes

### Examples

```bash
git checkout -b feature/user-profile
git checkout -b bugfix/login-error
git checkout -b hotfix/payment-gateway
```

## 📝 Pull Request Process

1. ✅ Update your feature branch with development
2. ✅ Resolve any conflicts
3. ✅ Push your changes
4. ✅ Create PR on GitHub
5. ⏳ Wait for code review
6. ✏️ Address review comments
7. ✅ Get approval
8. 🎉 Merge will be done by lead

## 🚫 Common Issues & Solutions

### 1. Stuck with Bad Changes

```bash
# Discard all local changes
git checkout -- .

# Or reset to last commit
git reset --hard HEAD
```

### 2. Wrong Branch

```bash
# Save your changes
git stash
git checkout correct-branch
git stash pop
```

### 3. Bad Merge

```bash
# Undo last merge
git reset --hard HEAD~1
```

### 4. Update Branch After PR Comments

```bash
# Make changes
git add .
git commit -m "fix: PR review changes"
git push origin your-feature-branch
```

## 📋 Quick Reference Commands

### Daily Workflow

```bash
# Morning routine
git checkout development && git pull origin development
git checkout your-feature-branch && git merge development

# During development
git add .
git commit -m "feat: your change description"

# End of day
git push origin your-feature-branch
```

### Checking Status

```bash
# See current branch and changes
git status

# See commit history
git log --oneline

# See branches
git branch -a
```

### Useful Commands

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# See what changed
git diff

# Discard changes to specific file
git checkout -- filename
```

## 💡 Best Practices

1. **Commit Often**: Small, frequent commits are better than large ones
2. **Pull Daily**: Stay up-to-date with development branch
3. **Test Before Push**: Always test your changes locally first
4. **Clear Messages**: Write descriptive commit messages
5. **One Task Per Branch**: Keep feature branches focused on single tasks
6. **Review Before PR**: Review your own changes before requesting review

## 🆘 Need Help?

If you're ever stuck:

1. Check `git status` to see current state
2. Refer to this workflow document
3. Ask team lead before force pushing
4. When in doubt, create a backup branch: `git branch backup-branch-name`
