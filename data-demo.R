# Generate random salary data

# Set up
library(dplyr) # data wrangling
library(lme4) # modeling
library(ggplot2) # visualization

# Parameters for generating faculty salary data
departments <- c('sociology', 'biology', 'english', 'informatics', 'statistics')
base.salaries <- c(40000, 50000, 60000, 70000, 180000) # different intercepts
annual.raises <- c(2000, 500, 500, 1700, 500) # different slopes
faculty.per.dept <- 20
total.faculty <- faculty.per.dept * length(departments)

# Generate dataframe of faculty and (random) years of experience
ids <- 1:total.faculty
department <- rep(departments, faculty.per.dept)
experience <- floor(runif(total.faculty, 0, 10)) # randomly vary experience level
bases <- rep(base.salaries, faculty.per.dept) * runif(total.faculty, .9, 1.1) # noise
raises <- rep(annual.raises, faculty.per.dept) * runif(total.faculty, .5, 1.1) # noise
df <- data.frame(ids, department, bases, experience, raises)

# Generate salaries (base + experience * raise)
df <- df %>% mutate(
  salary = bases + experience * raises
)

# Simple Scatterplot
ggplot(data=df, aes(x=experience, y=salary, group = department, colour = department)) +
    geom_point()

