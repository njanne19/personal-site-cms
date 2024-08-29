export default ({ env }) => {

    const useS3 = env('USE_S3', false);

    return {
        upload: useS3 ? {
            config: {
                provider: 'aws-s3',
                providerOptions: {
                    s3Options: {
                        credentials: {
                            accessKeyId: env('AWS_ACCESS_KEY_ID'),
                            secretAccessKey: env('AWS_ACCESS_SECRET'),
                        },
                        region: env('AWS_REGION'),
                        params: {
                          Bucket: env('AWS_BUCKET_NAME'),
                        },
                    }
                },
            },
        } : {},
    }
};