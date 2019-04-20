set -e

echo $(git log master..test --format=format:%H --full-diff packages/login)
