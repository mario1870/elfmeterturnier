-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "teamname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "kontaktperson" TEXT NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teams_teamname_key" ON "Teams"("teamname");
