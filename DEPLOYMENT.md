
# Rishta Sathi - Deployment Guide

## 🚀 Deployment Options

### 1. Vercel Deployment (Recommended for Frontend)

**Prerequisites:**
- Vercel account
- GitHub repository

**Steps:**
1. **Connect GitHub Repository**
   ```bash
   # Push your code to GitHub
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Environment Variables in Vercel**
   ```
   DATABASE_URL=your-production-database-url
   JWT_SECRET=your-production-jwt-secret
   RAZORPAY_KEY_ID=your-razorpay-key
   RAZORPAY_KEY_SECRET=your-razorpay-secret
   PAYPAL_CLIENT_ID=your-paypal-client-id
   PAYPAL_CLIENT_SECRET=your-paypal-secret
   ```

### 2. Railway Deployment (Full-Stack)

**Prerequisites:**
- Railway account
- GitHub repository

**Steps:**
1. **Create Railway Project**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login to Railway
   railway login
   
   # Initialize project
   railway init
   ```

2. **Add PostgreSQL Database**
   ```bash
   # Add PostgreSQL service
   railway add postgresql
   ```

3. **Deploy Application**
   ```bash
   # Deploy to Railway
   railway up
   ```

4. **Configure Environment Variables**
   - Go to Railway dashboard
   - Add environment variables
   - Connect database

### 3. AWS Deployment

**Architecture:**
- **Frontend**: S3 + CloudFront
- **Backend**: EC2 or Lambda
- **Database**: RDS PostgreSQL
- **Storage**: S3
- **CDN**: CloudFront

**Steps:**

1. **Setup RDS PostgreSQL**
   ```bash
   # Create RDS instance
   aws rds create-db-instance \
     --db-instance-identifier rishta-sathi-db \
     --db-instance-class db.t3.micro \
     --engine postgres \
     --master-username admin \
     --master-user-password yourpassword \
     --allocated-storage 20
   ```

2. **Setup S3 Bucket**
   ```bash
   # Create S3 bucket
   aws s3 mb s3://rishta-sathi-app
   
   # Configure static website hosting
   aws s3 website s3://rishta-sathi-app \
     --index-document index.html \
     --error-document error.html
   ```

3. **Deploy Application**
   ```bash
   # Build application
   npm run build
   
   # Upload to S3
   aws s3 sync dist/ s3://rishta-sathi-app --delete
   ```

4. **Setup CloudFront**
   ```bash
   # Create CloudFront distribution
   aws cloudfront create-distribution \
     --distribution-config file://cloudfront-config.json
   ```

### 4. Google Cloud Platform Deployment

**Services Used:**
- **Compute Engine** - Application hosting
- **Cloud SQL** - PostgreSQL database
- **Cloud Storage** - File storage
- **Cloud CDN** - Content delivery

**Steps:**

1. **Setup Cloud SQL**
   ```bash
   # Create Cloud SQL instance
   gcloud sql instances create rishta-sathi-db \
     --database-version=POSTGRES_13 \
     --tier=db-f1-micro \
     --region=us-central1
   ```

2. **Deploy to Compute Engine**
   ```bash
   # Create VM instance
   gcloud compute instances create rishta-sathi-vm \
     --image-family=debian-10 \
     --image-project=debian-cloud \
     --machine-type=e2-micro \
     --zone=us-central1-a
   ```

3. **Setup Application**
   ```bash
   # SSH to VM
   gcloud compute ssh rishta-sathi-vm
   
   # Install Node.js and dependencies
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Clone and setup application
   git clone https://github.com/yourusername/rishta-sathi.git
   cd rishta-sathi
   npm install
   npm run build
   ```

### 5. Docker Deployment

**Dockerfile:**
```dockerfile
# Use Node.js 18
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

**Docker Compose:**
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/rishta_sathi
    depends_on:
      - db
      - redis

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=rishta_sathi
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

**Deploy with Docker:**
```bash
# Build and run
docker-compose up -d

# Scale application
docker-compose up -d --scale app=3
```

### 6. Kubernetes Deployment

**Kubernetes Manifests:**

**deployment.yaml:**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: rishta-sathi-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: rishta-sathi
  template:
    metadata:
      labels:
        app: rishta-sathi
    spec:
      containers:
      - name: app
        image: rishta-sathi:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database-url
```

**service.yaml:**
```yaml
apiVersion: v1
kind: Service
metadata:
  name: rishta-sathi-service
spec:
  selector:
    app: rishta-sathi
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer
```

**Deploy to Kubernetes:**
```bash
# Apply manifests
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Check status
kubectl get pods
kubectl get services
```

## 🔧 Production Configuration

### Environment Variables

**Required for Production:**
```env
# Database
DATABASE_URL=postgresql://username:password@host:port/database

# Authentication
JWT_SECRET=your-super-secure-jwt-secret-key
JWT_EXPIRY=24h

# Payment Gateways
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxx
PAYPAL_CLIENT_ID=your-paypal-live-client-id
PAYPAL_CLIENT_SECRET=your-paypal-live-secret

# Communication
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxx

# File Storage
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
S3_BUCKET_NAME=rishta-sathi-production

# External APIs
AADHAAR_API_KEY=your-aadhaar-api-key
MAPS_API_KEY=your-google-maps-api-key

# Application
NODE_ENV=production
PORT=3000
FRONTEND_URL=https://rishtasathi.com
API_URL=https://api.rishtasathi.com

# Security
CORS_ORIGIN=https://rishtasathi.com
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW=15

# Monitoring
SENTRY_DSN=your-sentry-dsn
NEW_RELIC_LICENSE_KEY=your-newrelic-key
```

### Database Setup

**PostgreSQL Production Setup:**
```sql
-- Create production database
CREATE DATABASE rishta_sathi_production;

-- Create application user
CREATE USER rishta_sathi_user WITH PASSWORD 'secure_password';

-- Grant permissions
GRANT ALL PRIVILEGES ON DATABASE rishta_sathi_production TO rishta_sathi_user;

-- Switch to database
\c rishta_sathi_production;

-- Run schema
\i src/database/comprehensive-matrimony-schema.sql;

-- Create indexes for performance
CREATE INDEX CONCURRENTLY idx_users_email_hash ON users USING hash(email);
CREATE INDEX CONCURRENTLY idx_user_profiles_location ON user_profiles(current_city, current_state);
CREATE INDEX CONCURRENTLY idx_ai_compatibility_composite ON ai_compatibility_scores(user1_id, user2_id, overall_score);
```

### Performance Optimization

**Database Optimization:**
```sql
-- Enable query statistics
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- Optimize PostgreSQL settings
ALTER SYSTEM SET shared_buffers = '256MB';
ALTER SYSTEM SET effective_cache_size = '1GB';
ALTER SYSTEM SET work_mem = '4MB';
ALTER SYSTEM SET maintenance_work_mem = '64MB';
ALTER SYSTEM SET random_page_cost = 1.1;

-- Reload configuration
SELECT pg_reload_conf();
```

**Application Optimization:**
```bash
# Enable compression
npm install compression
npm install helmet

# Bundle analysis
npm run build -- --analyze

# Performance monitoring
npm install @sentry/node
npm install newrelic
```

### SSL/TLS Configuration

**Let's Encrypt with Nginx:**
```nginx
server {
    listen 80;
    server_name rishtasathi.com www.rishtasathi.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name rishtasathi.com www.rishtasathi.com;

    ssl_certificate /etc/letsencrypt/live/rishtasathi.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/rishtasathi.com/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Monitoring & Logging

**Application Monitoring:**
```javascript
// Sentry integration
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
  });
});
```

**Log Configuration:**
```javascript
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}
```

### Backup Strategy

**Database Backup:**
```bash
#!/bin/bash
# backup.sh

# Database backup
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d_%H%M%S).sql

# Upload to S3
aws s3 cp backup_$(date +%Y%m%d_%H%M%S).sql s3://rishta-sathi-backups/

# Keep only last 30 days
find . -name "backup_*.sql" -type f -mtime +30 -delete

# Cron job (daily at 2 AM)
# 0 2 * * * /path/to/backup.sh
```

**File Backup:**
```bash
#!/bin/bash
# Sync user uploads to backup location
aws s3 sync s3://rishta-sathi-uploads s3://rishta-sathi-backups/uploads --delete
```

### Security Checklist

**Production Security:**
- [ ] HTTPS enabled with valid SSL certificate
- [ ] Environment variables secured
- [ ] Database credentials rotated
- [ ] API rate limiting enabled
- [ ] CORS properly configured
- [ ] Security headers implemented
- [ ] File upload restrictions in place
- [ ] SQL injection protection enabled
- [ ] XSS protection enabled
- [ ] CSRF protection enabled
- [ ] Input validation implemented
- [ ] Error handling secured (no sensitive data in errors)
- [ ] Logging and monitoring configured
- [ ] Backup strategy implemented
- [ ] Disaster recovery plan in place

### Scaling Considerations

**Horizontal Scaling:**
```yaml
# Load balancer configuration
upstream app_servers {
    server app1.internal:3000;
    server app2.internal:3000;
    server app3.internal:3000;
}

server {
    location / {
        proxy_pass http://app_servers;
    }
}
```

**Database Scaling:**
```sql
-- Read replicas for scaling reads
-- Master-slave configuration
-- Connection pooling
-- Query optimization
-- Caching layer (Redis)
```

**CDN Configuration:**
```javascript
// Static asset caching
app.use('/static', express.static('public', {
  maxAge: '1y',
  etag: false
}));

// API response caching
app.use('/api', cache('5 minutes'));
```

### Maintenance

**Update Strategy:**
```bash
# Zero-downtime deployment
# 1. Deploy to staging
# 2. Run tests
# 3. Blue-green deployment
# 4. Health checks
# 5. Switch traffic
# 6. Monitor
```

**Database Migrations:**
```bash
# Run migrations
npm run migrate:prod

# Rollback if needed
npm run migrate:rollback
```

This comprehensive deployment guide covers all major deployment scenarios and production considerations for the Rishta Sathi matrimony platform.
